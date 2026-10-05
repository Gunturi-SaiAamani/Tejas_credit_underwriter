from django.db import models

class Business(models.Model):
    business_name = models.CharField(max_length=200)
    business_type = models.CharField(max_length=100)
    loan_amount = models.DecimalField(max_digits=12, decimal_places=2)

    def __str__(self):
        return self.business_name