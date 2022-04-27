from django.db import models
from django.urls import reverse
from ckeditor.fields import RichTextField


class DonationProject(models.Model):
    name = models.CharField(
        max_length=50,
    )
    slug = models.SlugField(
        verbose_name='External Project Slug',
        unique=True
    )
    intro_text = RichTextField(null=True, blank=True, verbose_name="Welcome Page Text")
    outro_text = RichTextField(null=True, blank=True, verbose_name="End Page Text")

    # owner = None  # TODO: Add FK to Owner.

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('project-detail', args=[str(self.id)])


class Participant(models.Model):
    project = models.ForeignKey(
        DonationProject,
        on_delete=models.CASCADE
    )

    # Participation statistics.
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True)
    completed = models.BooleanField(default=False)


class QuestionnaireResponse(models.Model):
    # Will only ever be deleted, when the project is deleted.
    project = models.ForeignKey(
        DonationProject,
        on_delete=models.CASCADE
    )
    participant = models.ForeignKey(
        Participant,
        on_delete=models.CASCADE
    )

    time_submitted = models.DateTimeField()
    data = models.JSONField()
