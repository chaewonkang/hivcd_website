# Generated by Django 3.1.4 on 2020-12-10 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postings', '0006_auto_20201210_2029'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='link',
            field=models.URLField(default=''),
        ),
    ]