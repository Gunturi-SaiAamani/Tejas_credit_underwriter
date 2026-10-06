from rest_framework import serializers

from .models import Application, Business, LoanDetails, Document


class BusinessSerializer(serializers.ModelSerializer):

    name = serializers.CharField(source='business_name')
    type = serializers.CharField(source='business_type')
    years = serializers.IntegerField(source='years_in_business')

    class Meta:
        model = Business
        fields = [
            'name',
            'type',
            'years',
            'city'
        ]


class LoanDetailsSerializer(serializers.ModelSerializer):

    amount = serializers.DecimalField(
        source='loan_amount',
        max_digits=12,
        decimal_places=2
    )

    class Meta:
        model = LoanDetails
        fields = [
            'amount',
            'purpose',
            'tenure'
        ]


class DocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = [
            'id',
            'document_type',
            'file_url',
            'file_name'
        ]


class ApplicationSerializer(serializers.ModelSerializer):

    business = BusinessSerializer()
    loan = LoanDetailsSerializer()
    documents = DocumentSerializer(many=True, required=False)

    class Meta:
        model = Application
        fields = [
            'application_id',
            'business',
            'loan',
            'documents'
        ]

    def create(self, validated_data):
        business_data = validated_data.pop('business')
        loan_data = validated_data.pop('loan')
        documents_data = validated_data.pop('documents', [])

        application = Application.objects.create(**validated_data)

        Business.objects.create(
            application=application,
            **business_data
        )

        LoanDetails.objects.create(
            application=application,
            **loan_data
        )

        for document_data in documents_data:
            Document.objects.create(
                application=application,
                **document_data
            )

        return application