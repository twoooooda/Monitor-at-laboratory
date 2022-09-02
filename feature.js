function showClock1() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();
    var msg = "現在時刻は" + nowHour + ":" + nowMin + ":" + nowSec + "です．";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
  }

setInterval('showClock1()', 1000);

const url = 'https://www.train-guide.westjr.co.jp/api/v3/area_kinki_trafficinfo.json';
callApi(url);

function callApi(url) {
  axios.get(url)
  .then(response => {
     console.log(JSON.stringify(response.data));
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    // skip
  });
  document.getElementById("DelayInfo").innerHTML = response.data.JSON()
};
  
// noticeDelay()

// async function noticeDelay(){
//     const res = await fetch("https://www.train-guide.westjr.co.jp/api/v3/area_kinki_trafficinfo.json");
//     document.getElementById("DelayInfo").innerHTML = res.text();
//     console.log(res);
// }
