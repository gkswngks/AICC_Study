from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import pandas as pd


#옵션
options = Options()
#불필요한 로그 삭제
options.add_experimental_option("excludeSwitches", ["enable-logging"])
#안꺼지게 하는 옵션
options.add_experimental_option("detach",True)
#화면 최대화
options.add_argument('--start-maximized') 

keyword = input("상품명: ")
service = Service()
driver = webdriver.Chrome(service=service, options=options)
driver.get(f"https://search.shopping.naver.com/search/all?query={keyword}")

action = driver.find_element(By.CSS_SELECTOR, "body")

for i in range(10):
    action.send_keys(Keys.END)


data = [] 
tree = driver.find_elements(By.CLASS_NAME,"product_info_area__xxCTi")
# print(tree)

for item in tree:
    title = item.find_element(By.CLASS_NAME,"product_title__Mmw2K").text
    # print(title)
    price = item.find_element(By.CLASS_NAME,'price_num__S2p_v').text.replace(',',"").split("원")[0]
    link = item.find_element(By.CLASS_NAME, 'product_link__TrAac').get_attribute("href")
    data.append([title, price, link])

df1 = pd.DataFrame(data, columns=['상품명','가격','주소'])
df1.to_csv(f'{keyword}.csv', index=False)