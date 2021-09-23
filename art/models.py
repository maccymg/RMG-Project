from django.db import models

class Art(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.ImageField(upload_to='images/')
    style = models.CharField(max_length=50)
    types = models.ManyToManyField('art_types.ArtType', related_name="art")

    def __str__(self):
        return f"{self.name} - {self.style}"
