from django.db import models

class Machine(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="machines/")
    capacity = models.CharField(max_length=100)

    def __str__(self):
        return self.name