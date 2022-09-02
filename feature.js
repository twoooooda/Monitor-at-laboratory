function showClock1() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();
    var msg = "現在時刻は" + nowHour + ":" + nowMin + ":" + nowSec + "です．";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
  }

setInterval('showClock1()', 1000);

let url = 'https://www.train-guide.westjr.co.jp/api/v3/area_kinki_trafficinfo.json';
callApi(url);

async function callApi(url) {
    const res = await fetch(url, {method: 'GET',headers: {'Content-Type': 'application/json'}});
    const users = await res.json();
    console.log(users)
  };
  
// noticeDelay()

// async function noticeDelay(){
//     const res = await fetch("https://www.train-guide.westjr.co.jp/api/v3/area_kinki_trafficinfo.json");
//     document.getElementById("DelayInfo").innerHTML = res.text();
//     console.log(res);
// }
