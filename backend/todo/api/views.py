from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# function based views
def index(request):
    return HttpResponse("Hello world, you are in api app")

def hello(request):
    return HttpResponse("Hello from server!!!!")