# Generated by Django 3.2.13 on 2022-09-28 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ddm', '0016_auto_20220928_1344'),
    ]

    operations = [
        migrations.AlterField(
            model_name='processingrule',
            name='comparison_operator',
            field=models.CharField(blank=True, choices=[('==', 'Equal (==)'), ('!=', 'Not Equal (!=)'), ('>', 'Greater than (>)'), ('<', 'Smaller than (<)'), ('>=', 'Greater than or equal (>=)'), ('<=', 'Smaller than or equal (<=)'), ('regex', 'Regex (removes matches)')], default=None, max_length=10, null=True),
        ),
    ]
