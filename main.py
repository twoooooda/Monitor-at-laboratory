import requests
import json
import datetime

date = datetime.datetime.today().strftime("%Y/%m/%d")

# http://api.jugemkey.jp/api/horoscope/year/month/day の形式
res = requests.get(url="http://api.jugemkey.jp/api/horoscope/free/" + date)

if str(res.raise_for_status()) == "None":
    results = json.loads(res.text)
    with open("json_fortune.json", "w", encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False)
else:
    results = "error"
    with open("json_fortune.json", "w", encoding='utf-8') as f:
        json.dump(results, f)
    # print(json.dumps(json.loads(res.text), indent=4, ensure_ascii=False))
    # #たとえば、牡羊座のみ取得したい場合
    # print(res.json()["horoscope"][date][0])
