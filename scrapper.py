import selenium 
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

#Setting up the Scrapper, integrating it with browserDriver.
PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)

#Getting the required web page to scrap
driver.get('https://www.brainyquote.com/topics/day-quotes/')




