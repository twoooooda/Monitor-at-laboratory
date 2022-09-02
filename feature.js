function showClock1() {
    var nowTime = new Date();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();
    var msg = "åªç›éûçèÇÕÅA" + nowHour + ":" + nowMin + ":" + nowSec + " Ç≈Ç∑ÅB";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
  }

setInterval('showClock1()', 1000);

