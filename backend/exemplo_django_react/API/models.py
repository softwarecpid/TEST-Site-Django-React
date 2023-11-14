from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class TeamSoft(models.Model):
    ID = models.AutoField(primary_key=True, verbose_name="ID")
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1, related_name='Info')
    Name = models.CharField(max_length=100, verbose_name="Name", default=1, blank=False, null=False)
    SurName = models.CharField(max_length=100, verbose_name="SurName", default=1, blank=False, null=False)
    Position = models.CharField(max_length=100, verbose_name="Position", default=1, blank=False, null=False)
    Email = models.EmailField(max_length=200, verbose_name="Email", blank=False, null=False)
    Telephone = models.CharField(max_length=15, verbose_name="Telephone", blank=False, null=False)
    CPF = models.CharField(max_length=15, verbose_name="CPF", blank=False, null=False)
    RG = models.CharField(max_length=10, verbose_name="Identity", blank=False, null=False)
    BirthDate = models.CharField(max_length=10, verbose_name="BirthDate", blank=False, null=False)

    def __str__(self):
        return f'{self.Name} {self.SurName}'
