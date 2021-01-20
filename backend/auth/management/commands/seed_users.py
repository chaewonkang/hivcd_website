import pytz
import datetime
import random
from django.core.management.base import BaseCommand
from django_seed import Seed
from faker import Faker
from auth.models import User

fake = Faker()
start_date = datetime.date(year=2015, month=1, day=1)
fake.date_between(start_date=start_date, end_date="+30y")


class Command(BaseCommand):
    help = "This command creates many users"

    def add_arguments(self, parser):
        parser.add_argument(
            "--number",
            default=1,
            type=int,
            help="How many users do you want to create?",
        )

    def handle(self, *args, **options):
        number = options.get("number")
        seeder = Seed.seeder()
        seeder.add_entity(
            User,
            number,
            {
                "username": lambda x: seeder.faker.email(),
                "is_staff": False,
                "is_superuser": False,
                "created_at": lambda x: fake.date_between(
                    start_date=start_date, end_date="+30y"
                ),
                "updated_at": lambda x: fake.date_between(
                    start_date=start_date, end_date="+30y"
                ),
            },
        )
        seeder.execute()
        self.stdout.write(self.style.SUCCESS(f"{number} users Created"))

