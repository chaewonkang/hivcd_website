import random
from django.core.management.base import BaseCommand
from django.contrib.admin.utils import flatten
from django_seed import Seed
from apps.authentications.models import User
from apps.postings import models as posting_models

NAME = "postings"


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
                "title": seeder.faker.sentence(),
                "text": seeder.faker.sentence(),
                "category": lambda x: random.randint(1, 4)
            },
        )
        created_photos = seeder.execute()
        created_clean = flatten(list(created_photos.values()))
        comments = posting_models.Comment.objects.all()
        files = posting_models.File.objects.all()
        for pk in created_clean:
            post_instance = posting_models.Post.objects.get(pk=pk)
            for i in range(3):
                posting_models.Photo.objects.create(
                    caption=seeder.faker.sentence(),
                    post=post_instance,
                    photo=f"room_photos/{random.randint(1, 31)}.webp",
                )
        created_comments = seeder.execute()
        created_clean = flatten(list(created_comments.values()))
        for a in created_clean:
            post_instance = posting_models.Post.objects.get(pk=pk)
            for i in range(3):
                posting_models.Comment.objects.create(
                    post=post_instance,
                    author=post_instance.author,
                    text=seeder.faker.sentence()
                )
        created_files = seeder.execute()
        created_clean = flatten(list(created_files.values()))
        for f in created_clean:
            post_instance = posting_models.Post.objects.get(pk=pk)
            for i in range(3):
                posting_models.File.objects.create(
                    name=seeder.faker.sentence(),
                    post=post_instance,
                    files=f"room_photos/{random.randint(1,31)}.webp",
                )
        self.stdout.write(self.style.SUCCESS(f"{number} {NAME} Created"))
