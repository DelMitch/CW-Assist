from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    context = {'film_list': 0, 'genre_list': 0, 'year_list': 0, 'person': 0, 'slogan': False, 'recent': False, 'no_reviews': False}
    return render(request, 'assistcw/index.html', context)