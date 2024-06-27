from rest_framework import viewsets
from .models import Name
from .serializers import NameSerializer

# Create your views here.
class NameViewSet(viewsets.ModelViewSet):
  queryset = Name.objects.all()
  serializer_class = NameSerializer