# Generated by Django 3.1.4 on 2021-02-16 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_auth', '0002_auto_20210216_1256'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_sidi',
            field=models.BooleanField(default=False),
        ),
    ]
