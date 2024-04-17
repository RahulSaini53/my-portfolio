# Generated by Django 4.2.5 on 2024-03-14 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TexttoVoice', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='texttovoicemodel',
            name='audio_file',
            field=models.FileField(upload_to='./videos'),
        ),
        migrations.AlterField(
            model_name='texttovoicemodel',
            name='title',
            field=models.CharField(default='myaudio1', max_length=50),
        ),
    ]
