# Generated by Django 4.0.3 on 2022-04-12 02:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tables_app', '0002_alter_rating_username_delete_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rating',
            old_name='username',
            new_name='user',
        ),
    ]