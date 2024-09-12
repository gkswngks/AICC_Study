from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import pyperclip
import pyautogui
import time


#옵션
options = Options()
#불필요한 로그 삭제
options.add_experimental_option("excludeSwitches", ["enable-logging"])
#안꺼지게 하는 옵션
options.add_experimental_option("detach",True)
#화면 최대화
options.add_argument('--start-maximized') 

service = Service()
driver = webdriver.Chrome(service=service, options=options)
driver.get("https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/")

id = driver.find_element(By.ID,"id")
id.click()
time.sleep(2)
pyperclip.copy("ID")
pyautogui.hotkey("ctrl",'v')

pw = driver.find_element(By.ID,"pw")
pw.click()
time.sleep(2)
pyperclip.copy("1a2a3a4a5a6a")
pyautogui.hotkey("ctrl",'v')

time.sleep(2)
login = driver.find_element(By.CSS_SELECTOR,".btn_login")
login.click()


