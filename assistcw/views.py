from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    if request.method == 'POST':
        opt = request.POST.get('opt', '')
        pinput = request.POST.get('input', '')
        output = request.POST.get('output', '')
        pitch = request.POST.get('pitch', '')
        wpm = request.POST.get('wpm', '')
        wpmvar = request.POST.get('wpmvar', '')
        farns = request.POST.get('farns', '')
        #print(request.POST)

    #context = {'input': pinput, 'output': output, 'pitch': pitch, 'wpm': wpm, 'wpmvar': wpmvar, 'farns': farns}
    context = {}
    return render(request, 'assistcw/index.html', context)

def process(opt, output, pitch, wpm, wpmvar, farns):
    # play sound in browser
    return 0