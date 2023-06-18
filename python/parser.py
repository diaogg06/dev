# -*- coding: utf-8 -*-
"""Untitled1.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1C2H1qVkxJa1dpcGv9WGGQWBjJnreu1Oc
"""

import requests
from bs4 import BeautifulSoup as BS

news = []

for page in range(277):
  r = requests.get("http://www.stu.ru/news/index.php?page=527&podrazd=&p=" + str(page))
  html = BS(r.content, "html.parser")


  items = html.select("#page_text > div > .news_block_table_inner_page")


  for el in items:
    new = {}

    title = el.select(".news_inner_text > b > span")
    content = el.select(".news_inner_text > span")
    date = el.select(".news_block_date")

    new["date"] = date[0].text.replace("\n", "")
    new["title"] = title[0].text

    if content != []:
      new["content"] = content[0].text.replace("\r\n", "")
    else:
      new["content"] = ""

    news.append(new)


print(*news, sep="\n")