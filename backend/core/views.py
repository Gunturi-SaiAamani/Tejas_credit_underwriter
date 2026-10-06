from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ApplicationSerializer


@api_view(['POST'])
def create_application(request):

    serializer = ApplicationSerializer(data=request.data)

    if serializer.is_valid():
        application = serializer.save()

        return Response({
            "message": "Application created successfully",
            "application": ApplicationSerializer(application).data
        })

    return Response(serializer.errors, status=400)