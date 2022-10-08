import requests
import json
import datetime

date = datetime.datetime.today().strftime("%Y/%m/%d")

# http://api.jugemkey.jp/api/horoscope/year/month/day の形式
res = requests.get(url="http://api.jugemkey.jp/api/horoscope/free/" + date)

if str(res.raise_for_status()) == "None":
    with open("./json_fortune.josn", "w") as f:
        json.dumps(json.loads(res.text), f)
else:
    pass
    # print(json.dumps(json.loads(res.text), indent=4, ensure_ascii=False))
    # #たとえば、牡羊座のみ取得したい場合
    # print(res.json()["horoscope"][date][0])
