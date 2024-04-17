# Generated by Django 4.2.5 on 2024-03-14 09:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RecursiveList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('listid', models.CharField(max_length=100, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('url', models.URLField(max_length=400)),
                ('parent_list', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='Documentation.recursivelist', to_field='listid')),
            ],
        ),
    ]