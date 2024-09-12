from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

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
driver.get("https://www.naver.com")

