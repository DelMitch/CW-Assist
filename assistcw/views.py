from django.shortcuts import render
from django.http import HttpResponse

import pyaudio
import numpy as np
import math
import time
import sys
import sounddevice as sd


dot = 1.0
dash = 3.0 * dot


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
        #print(opt,output,pitch,wpm,wpmvar,farns)
        process(opt, output, float(pitch), float(wpm), float(wpmvar), farns)

    #context = {'input': pinput, 'output': output, 'pitch': pitch, 'wpm': wpm, 'wpmvar': wpmvar, 'farns': farns}
    context = {}
    return render(request, 'assistcw/index.html', context)

def process(opt, output, pitch, wpm, wpmvar, farns):
    for ch in output:
        if ch == ".":
            playSound(dot/wpm, pitch)
        elif ch == "-":
            playSound(dash/wpm, pitch)
        elif ch == " ":
            playSound(dot/wpm, pitch)
        else:
            raise Exception("Invalid Character")
    
    if opt == 'listen':
        print("play in browser")
    elif opt == 'broadcast':
        print("send to port")
    else:
        raise Exception("Invalid Option")


def playSound(duration, pitch):
    p = pyaudio.PyAudio()

    fs = 44100   # Hz - sample rate
    freq = pitch # Hz - frequency

    data = ''.join([chr(int(math.sin(x/((fs/freq)/math.pi))*127+128)) for x in range(fs)])
    
    print(data)

    stream = p.open(format = p.get_format_from_width(1),
                    channels = 1,
                    rate = fs,
                    output = True)

    for i in range(int(duration)):
        stream.write(data[i])

    stream.stop_stream()
    stream.close()
    p.terminate()