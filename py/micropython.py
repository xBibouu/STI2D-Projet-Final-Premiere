import network
import urequests
import time
from uln2003 import *

p1=Pin(27,Pin.OUT)
p2=Pin(14,Pin.OUT)
p3=Pin(12,Pin.OUT)
p4=Pin(13,Pin.OUT)


SSID = "sti2d2g4"
PASSWORD = "sdfsdfsdf"

sta_if = network.WLAN(network.STA_IF)

sta_if.active(True)


sta_if.connect(SSID, PASSWORD)

while not sta_if.isconnected():
    pass

print("Connecté au réseau Wi-Fi")

url = "http://172.17.112.127:3000"

while True:
    try:
        response = urequests.get(url)
        data = response.json()
        stop = data['moteurstop']
        start = data['moteurstart']
        pas = data['moteurpas']
        print("Valeurs reçues:", stop, start, pas)
        if start == 1 and stop == 0:
            s1 = Stepper(FULL_STEP, p1, p2, p3, p4, delay=3)    
            s1.step(pas,-1)
        if stop == 1:
            start = 0
    except Exception as e:
        print("Erreur lors de la récupération des données:", e)
        
