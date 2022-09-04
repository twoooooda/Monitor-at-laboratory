function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if (num < 10) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}

function showClock() {
  var nowTime = new Date();
  var nowHour = set2fig(nowTime.getHours());
  var nowMin = set2fig(nowTime.getMinutes());
  var nowSec = set2fig(nowTime.getSeconds());
  var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("RealtimeClockArea").innerHTML = msg;
}

setInterval('showClock()', 1000);
setInterval('notice_schedule()', 1000)

function notice_schedule() {
  //行先と時刻表のリスト
  const go = ['谷上', '谷上', '谷上', '谷上', '谷上', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '名谷', '新神戸', '新神戸', '名谷', '名谷', '名谷'];
  const times = ['5:29', '5:40', '5:49', '6:00', '6:13', '6:22', '6:35', '6:40', '6:50', '7:00', '7:05', '7:08', '7:12', '7:15', '7:19', '7:22', '7:26', '7:29', '7:33', '7:36', '7:40', '7:43', '7:47', '7:50', '7:54', '7:57', '8:01', '8:04', '8:08', '8:11', '8:17', '8:21', '8:25', '8:29', '8:33', '8:39', '8:44', '8:48', '8:53', '8:59', '9:05', '9:12', '9:18', '9:24', '9:32', '9:38', '9:45', '9:53', '9:59', '10:06', '10:14', '10:21', '10:29', '10:36', '10:44', '10:51', '10:59', '11:06', '11:14', '11:21', '11:29', '11:36', '11:44', '11:51', '11:59', '12:06', '12:14', '12:21', '12:29', '12:36', '12:44', '12:51', '12:59', '13:06', '13:14', '13:21', '13:29', '13:36', '13:44', '13:51', '13:59', '14:06', '14:14', '14:21', '14:29', '14:36', '14:44', '14:51', '14:59', '15:06', '15:14', '15:21', '15:29', '15:36', '15:44', '15:51', '15:58', '16:06', '16:14', '16:24', '16:29', '16:36', '16:43', '16:51', '16:57', '17:02', '17:08', '17:14', '17:20', '17:25', '17:30', '17:35', '17:40', '17:44', '17:50', '17:55', '18:00', '18:06', '18:11', '18:17', '18:23', '18:29', '18:36', '18:41', '18:47', '18:54', '19:00', '19:04', '19:12', '19:16', '19:23', '19:29', '19:35', '19:41', '19:47', '19:53', '19:59', '20:05', '20:11', '20:17', '20:23', '20:29', '20:35', '20:41', '20:48', '20:52', '20:58', '21:04', '21:11', '21:17', '21:23', '21:29', '21:35', '21:41', '21:47', '21:55', '22:02', '22:11', '22:22', '22:30', '22:39', '22:48', '22:55', '23:01', '23:06', '23:14', '23:23', '23:31', '23:39', '23:48', '23:58', '0:09', '0:22', '0:33', '0:48']

  //今の時刻と時刻表からの時刻を入れる変数を宣言
  var Now = new Date();
  Now.setMinutes(Now.getMinutes() + 10);
  var time_train = new Date();

  for (let i = 0; i < times.length; i++) {
    //時刻表からのデータから:を削除
    var time = times[i].split(":");

    time_train.setHours(Number(time[0]));
    time_train.setMinutes(Number(time[1]));

    if (Number(time_train) > Number(Now)) {
      let msg1 = "次に乗れそうな電車は、" + time[0] + ":" + time[1] + "発 " + go[i] + "行き" + "です。";
      let msg2 = "その次に乗れそうな電車は、" + times[i + 1].split(":")[0] + ":" + times[i + 1].split(":")[1] + "発 " + go[i + 1] + "行き" + "です。";

      document.getElementById("NextTrain1").innerHTML = msg1;
      document.getElementById("NextTrain2").innerHTML = msg2;
      break;
    }

    else {
      let msg1 = "電車はありません。";
      document.getElementById("NextTrain1").innerHTML = msg1;
    }
  }
}
