from django.db import models


class Application(models.Model):
    application_id = models.CharField(max_length=50, unique=True)
    status = models.CharField(max_length=50, default="draft")
    created_at = models.DateTimeField(auto_now_add=True)
    submitted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.application_id


class Business(models.Model):
    application = models.OneToOneField(
        Application,
        on_delete=models.CASCADE,
        related_name='business'
    )
    business_name = models.CharField(max_length=200)
    business_type = models.CharField(max_length=100)
    years_in_business = models.IntegerField()
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.business_name


class LoanDetails(models.Model):
    application = models.OneToOneField(
        Application,
        on_delete=models.CASCADE,
        related_name='loan'
    )
    loan_amount = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )
    purpose = models.CharField(max_length=200)
    tenure = models.IntegerField()

    def __str__(self):
        return f"Loan - {self.application.application_id}"


class Document(models.Model):
    application = models.ForeignKey(
        Application,
        on_delete=models.CASCADE,
        related_name='documents'
    )
    document_type = models.CharField(max_length=50)
    file_url = models.CharField(max_length=500)
    file_name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.document_type} - {self.application.application_id}"