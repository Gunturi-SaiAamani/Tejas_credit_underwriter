from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Business
from .serializers import BusinessSerializer

@api_view(['GET'])
def get_businesses(request):
    businesses = Business.objects.all()

    serializer = BusinessSerializer(businesses, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def create_business(request):
    serializer = BusinessSerializer(data=request.data)

    if serializer.is_valid():
        business = serializer.save()

        return Response({
            "message": "Business created successfully",
            "business": BusinessSerializer(business).data
        })

    return Response(serializer.errors, status=400)
