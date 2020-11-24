import pyautogui
import os
import sys
import time
start_time = time.time()

while True:
    currenttime = time.time()
    time.sleep(50)
    pyautogui.write('pls fish', interval=0.05)
    print ("fished")
    pyautogui.press('enter')
    time.sleep(10)
    pyautogui.write('pls beg', interval=0.05)
    print ("Begged")
    pyautogui.press('enter')
    time.sleep(10)
    pyautogui.write('pls hunt', interval=0.05)
    print("hunted")
    pyautogui.press('enter')
