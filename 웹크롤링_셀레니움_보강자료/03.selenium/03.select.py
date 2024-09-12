from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

#By 새문법 추가
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

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

search = driver.find_element(By.CSS_SELECTOR,"#query")
# search = driver.find_element(By.ID,"query")

search.click()
search.send_keys("모니터",Keys.ENTER)

more_info = driver.find_element(By.XPATH,'//*[@id="main_pack"]/section[1]/div[1]/div[3]/div[1]/div[1]/ul/li[1]/div/div/a')
more_info.click()