# Generated by Django 3.1.4 on 2021-04-18 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postings', '0013_auto_20210418_1531'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='category',
            field=models.IntegerField(choices=[(1, 'News'), (2, 'Job'), (3, 'Lostandfound'), (4, 'Life'), (5, 'Info'), (6, 'Gw'), (7, 'Wff'), (8, 'Club'), (9, 'Etc'), (10, 'Archive')]),
        ),
    ]
