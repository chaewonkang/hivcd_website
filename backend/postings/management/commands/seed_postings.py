import pytz
import datetime
import random
from faker import Faker
from django.db.models import Max
from django.core.management.base import BaseCommand
from django.contrib.admin.utils import flatten
from django_seed import Seed
from auth.models import User
from postings import models as posting_models


NAME = "postings"

fake = Faker()
start_date = datetime.date(year=2015, month=1, day=1)
fake.date_between(start_date=start_date, end_date="+30y")

def get_random_user():
    max_id = User.objects.all().aggregate(max_id=Max("id"))["max_id"]
    return User.objects.get(pk=random.randint(1,max_id))


class Command(BaseCommand):
    help = f"This command creates many {NAME}"

    def add_arguments(self, parser):
        parser.add_argument(
            "--number",
            default=2,
            type=int,
            help=f"How many {NAME} do you want to create?",
        )

    def handle(self, *args, **options):
        number = options.get("number")
        seeder = Seed.seeder()
        all_users = User.objects.all()
        postings = posting_models.Post.objects.all()
        seeder.add_entity(
            posting_models.Post,
            number,
            {
                "author": lambda x: random.choice(all_users),
                "title": lambda x: seeder.faker.sentence(),
                "text": lambda x: seeder.faker.text(),
                "category": lambda x: random.randint(1, 7),
                "created": lambda x: fake.date_between(
                    start_date=start_date, end_date="+30y"
                ),
                "updated": lambda x: fake.date_between(
                    start_date=start_date, end_date="+30y"
                ),
            },
        )
        created_photos = seeder.execute()
        created_clean = flatten(list(created_photos.values()))
        for pk in created_clean:
            post_instance = posting_models.Post.objects.get(pk=pk)
            for i in range(3):
                posting_models.Photo.objects.create(
                    caption=seeder.faker.sentence(),
                    post=post_instance,
                    photo=f"room_photos/무한도전_로고.jpg",
                    created=lambda x: fake.date_between(
                        start_date=start_date, end_date="+30y"
                    ),
                    updated=lambda x: fake.date_between(
                        start_date=start_date, end_date="+30y"
                    ),
                )

        for pk in created_clean:
            post_instance = posting_models.Post.objects.get(pk=pk)
            for i in range(3):
                posting_models.Comment.objects.create(
                    post=post_instance,
                    author=random.choice(all_users),
                    text=seeder.faker.sentence(),
                    created=lambda x: fake.date_between(
                        start_date=start_date, end_date="+30y"
                    ),
                    updated=lambda x: fake.date_between(
                        start_date=start_date, end_date="+30y"
                    ),
                )

        for pk in created_clean:
            post_instance = posting_models.Post.objects.get(pk=pk)
            for i in range(3):
                posting_models.File.objects.create(
                    name=seeder.faker.sentence(),
                    post=post_instance,
                    files=f"room_photos/무한도전_로고.jpg",
                    created=lambda x: fake.date_between(
                        start_date=start_date, end_date="+30y"
                    ),
                    updated=lambda x: fake.date_between(
                        start_date=start_date, end_date="+30y"
                    ),
                )
        self.stdout.write(self.style.SUCCESS(f"{number} {NAME} Created"))

