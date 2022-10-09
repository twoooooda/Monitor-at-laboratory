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

    # 現在時刻を書き込むことで強制的に差分を生ませる
    f = open("nowtime.txt", "w")
    f.write(datetime.datetime.now().strftime("%Y/%m/%d/%H:%M:%S"))
    f.close()
else:
    results = "error"
    with open("json_fortune.json", "w", encoding='utf-8') as f:
        json.dump(results, f)

    # 現在時刻を書き込むことで強制的に差分を生ませる
    f = open("nowtime.txt", "w")
    f.write(datetime.datetime.now().strftime("%Y/%m/%d/%H:%M:%S"))
    f.close()
