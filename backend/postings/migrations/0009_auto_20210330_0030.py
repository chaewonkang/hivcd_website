# Generated by Django 3.1.4 on 2021-03-29 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postings', '0008_auto_20210330_0012'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_at',
            field=models.DateTimeField(default=None),
        ),
    ]
