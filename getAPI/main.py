import requests
import json
import datetime

date = datetime.datetime.today().strftime("%Y/%m/%d")

# 占いを叩いてた時 http://api.jugemkey.jp/api/horoscope/year/month/day の形式
#掃除当番APIを叩く
res = requests.get(url="https://script.google.com/macros/s/AKfycbzRi4QqDpCxY1inNFO8EFLxaI8l0616qny_M8EGPTQqV22PJpz4yQfsY6nBQ-Uepr-W/exec")

if str(res.raise_for_status()) == "None":
    results = json.loads(res.text)
    #results["horoscope"][date] = sorted(results["horoscope"][date], key=lambda k: k['rank'])
    with open("json_fortune.json", "w", encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False)

    #現在時刻を書き込むことで強制的に差分を生ませる
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
