function showClock1() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();
    var msg = "���ݎ����́A" + nowHour + ":" + nowMin + ":" + nowSec + " �ł��B";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
  }

setInterval('showClock1()', 1000);

