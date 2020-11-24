import pyautogui
import os
import sys
import time
start_time = time.time()


while True:
    filetime = os.path.getmtime("log.txt")
    while True:
        currenttime = time.time()
        currentfile = os.path.getmtime("log.txt")
        if filetime != currentfile:
            print("changed")
            filetime = os.path.getmtime("log.txt")
            with open('log.txt') as f:
                first_line = f.readline()
                pyautogui.write(first_line, interval=0.055)
                pyautogui.press('enter')
