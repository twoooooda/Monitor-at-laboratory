//どちらも1秒ごとに実行
setInterval('showClock()', 1000);
setInterval('notice_schedule()', 1000);
//setInterval('notice_fortune()', 1000);
notice_cleaningDuty();
notice_RSSNews();
notice_LabSchedule();


//60分に一回リロード
setTimeout(function () {
  location.reload();
}, 3600000);

// 桁数が1桁だったら先頭に0を加えて2桁に調整する
function set2fig(num) {
  var ret;
  if (num < 10) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}

//今の時刻を秒刻みで表示する
function showClock() {
  var nowTime = new Date();
  var nowHour = set2fig(nowTime.getHours());
  var nowMin = set2fig(nowTime.getMinutes());
  var nowSec = set2fig(nowTime.getSeconds());
  var msg = "現在時刻は、<b>" + nowHour + ":" + nowMin + ":" + nowSec + "</b>です。";
  document.getElementById("RealtimeClockArea").innerHTML = msg;
}


//神戸市営地下鉄 東行き のダイヤを表示する
function notice_schedule() {
  //行先と時刻表のリスト
  let go = [];
  let times = [];

  //_wday:平日，_holi:休日
  const go_wday = ['谷上', '谷上', '谷上', '谷上', '谷上', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '名谷', '新神戸', '新神戸', '名谷', '名谷', '名谷'];
  const times_wday = ['5:29', '5:40', '5:49', '6:00', '6:13', '6:22', '6:35', '6:40', '6:50', '7:00', '7:05', '7:08', '7:12', '7:15', '7:19', '7:22', '7:26', '7:29', '7:33', '7:36', '7:40', '7:43', '7:47', '7:50', '7:54', '7:57', '8:01', '8:04', '8:08', '8:11', '8:17', '8:21', '8:25', '8:29', '8:33', '8:39', '8:44', '8:48', '8:53', '8:59', '9:05', '9:12', '9:18', '9:24', '9:32', '9:38', '9:45', '9:53', '9:59', '10:06', '10:14', '10:21', '10:29', '10:36', '10:44', '10:51', '10:59', '11:06', '11:14', '11:21', '11:29', '11:36', '11:44', '11:51', '11:59', '12:06', '12:14', '12:21', '12:29', '12:36', '12:44', '12:51', '12:59', '13:06', '13:14', '13:21', '13:29', '13:36', '13:44', '13:51', '13:59', '14:06', '14:14', '14:21', '14:29', '14:36', '14:44', '14:51', '14:59', '15:06', '15:14', '15:21', '15:29', '15:36', '15:44', '15:51', '15:58', '16:06', '16:14', '16:24', '16:29', '16:36', '16:43', '16:51', '16:57', '17:02', '17:08', '17:14', '17:20', '17:25', '17:30', '17:35', '17:40', '17:44', '17:50', '17:55', '18:00', '18:06', '18:11', '18:17', '18:23', '18:29', '18:36', '18:41', '18:47', '18:54', '19:00', '19:04', '19:12', '19:16', '19:23', '19:29', '19:35', '19:41', '19:47', '19:53', '19:59', '20:05', '20:11', '20:17', '20:23', '20:29', '20:35', '20:41', '20:48', '20:52', '20:58', '21:04', '21:11', '21:17', '21:23', '21:29', '21:35', '21:41', '21:47', '21:55', '22:02', '22:11', '22:22', '22:30', '22:39', '22:48', '22:55', '23:01', '23:06', '23:14', '23:23', '23:31', '23:39', '23:48', '23:58', '0:09', '0:22', '0:33', '0:48']
  const go_holi = ['新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '谷上', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '新神戸', '谷上', '新神戸', '谷上', '新神戸', '谷上', '名谷', '谷上', '新神戸', '谷上', '名谷', '名谷', '名谷', '名谷'];
  const times_holi = ['5:29', '5:40', '5:52', '6:01', '6:14', '6:22', '6:37', '6:45', '6:56', '7:03', '7:10', '7:17', '7:23', '7:28', '7:35', '7:41', '7:48', '7:52', '7:57', '8:02', '8:08', '8:13', '8:17', '8:23', '8:30', '8:36', '8:43', '8:49', '8:54', '8:58', '9:04', '9:10', '9:18', '9:24', '9:29', '9:35', '9:43', '9:51', '9:58', '10:06', '10:13', '10:21', '10:29', '10:36', '10:44', '10:51', '10:59', '11:06', '11:14', '11:21', '11:29', '11:36', '11:44', '11:51', '11:59', '12:06', '12:14', '12:21', '12:29', '12:36', '12:44', '12:51', '12:59', '13:06', '13:14', '13:21', '13:29', '13:36', '13:44', '13:51', '13:59', '14:06', '14:14', '14:21', '14:29', '14:36', '14:44', '14:51', '14:59', '15:06', '15:14', '15:21', '15:29', '15:36', '15:44', '15:50', '15:58', '16:05', '16:14', '16:21', '16:29', '16:35', '16:43', '16:50', '16:58', '17:05', '17:13', '17:20', '17:27', '17:33', '17:40', '17:46', '17:54', '18:01', '18:07', '18:14', '18:23', '18:28', '18:37', '18:43', '18:51', '18:58', '19:06', '19:13', '19:21', '19:28', '19:34', '19:41', '19:48', '19:55', '20:03', '20:10', '20:18', '20:26', '20:33', '20:41', '20:49', '20:56', '21:05', '21:13', '21:23', '21:29', '21:38', '21:45', '21:53', '22:02', '22:08', '22:16', '22:22', '22:29', '22:39', '22:49', '22:59', '23:05', '23:13', '23:21', '23:32', '23:38', '23:47', '23:56', '0:09', '0:22'];

  //今の時刻と時刻表からの時刻を入れる変数を宣言
  var Now = new Date();
  Now.setMinutes(Now.getMinutes() + 10); //10分後
  var time_train = new Date();

  //休日の場合
  if (Now.getDay() == 0 || Now.getDay() == 6) {
    go = go_holi;
    times = times_holi;
  }
  //平日の場合
  else {
    go = go_wday;
    times = times_wday;
  }

  //時刻表から全探索
  for (let i = 0; i < times.length; i++) {
    //時刻表からのデータから:を削除
    var time = times[i].split(":");

    time_train.setHours(Number(time[0]));
    time_train.setMinutes(Number(time[1]));

    if (Number(time_train) > Number(Now)) {
      let msg1 = "次に乗れそうな地下鉄は、<br><en><b>" + time[0] + ":" + time[1] + " 発  " + go[i] + "行き</b></en>" + "です。";
      let msg2 = "その次に乗れそうな地下鉄は、<br><en><b>" + times[i + 1].split(":")[0] + ":" + times[i + 1].split(":")[1] + " 発  " + go[i + 1] + "行き</b></en>" + "です。";

      document.getElementById("NextTrain1").innerHTML = msg1;
      document.getElementById("NextTrain2").innerHTML = msg2;
      break;
    }

    else {
      let msg1 = "電車はありません。";
      let msg2 = "";

      document.getElementById("NextTrain1").innerHTML = msg1;
      document.getElementById("NextTrain2").innerHTML = msg2;

    }
  }
}


//掃除当番お知らせ関数
function notice_cleaningDuty() {
  //gasのリンク（狭間さん担当）
  const url = "https://script.google.com/macros/s/AKfycbyhWnXMxLbKdVmWcFmMY-SWhYruRU8HqSdxOuVWKej9iCuEnfGfPJiyILGYvMXG3FIE/exec";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const fortune = data["member"];

      //変数がおかしいけど今は気にしない
      document.getElementById("todaysFortune").innerHTML = "<font size=\"7\" color=\"#ff1493\">"
        + fortune
        + "さん</font>"
        + "です。";
    })
    .catch(error => console.log(error));
}


//研究室のスケジュールお知らせ関数
function notice_LabSchedule() {
  //gasのリンク（狭間さん担当）
  const url_schedule = "https://script.google.com/macros/s/AKfycbyJTAp-shF-JjQnkBBLgs_M52ar9th_Zwg8JuW_ZQRwatRuOd6bGdaUdLtF-pq_MNU/exec";

  fetch(url_schedule)
    .then(response => response.json())
    .then(data => {
      var schedule = new Array(data["event"].length);
      schedule = data["event"];

      var temp_day = 0;

      //eventから要素を抽出
      schedule.forEach(function(elem){
        //日が変わる場合
        if(temp_day != elem["date"]){
          document.getElementById("Lab_schedule").innerHTML += "<br>" + "<font color=\"#ff1493\">" 
          + elem["month"] 
          + "/" 
          + elem["date"]
          + "（" + elem["day"] + "）"
          + "</font>" 
          + ": " 
          + elem["title"];

          //先頭の<br>を削除したい
          if(temp_day == 0){
            var temp = document.getElementById("Lab_schedule").innerHTML;
            temp = temp.replace("<br>", "");
            document.getElementById("Lab_schedule").innerHTML = temp;
          }

          temp_day = elem["date"];
        }

        //日が変わらない場合
        else{
          document.getElementById("Lab_schedule").innerHTML += "、" + elem["title"];
        }
      });
    })
    .catch(error => console.log(error));
}


//NHKニュースのRSS受信用の関数
function notice_RSSNews() {
  let viewXML = (xmlDocument) => {
    //取得した文字列をコンソール出力
    console.log(xmlDocument);

    //XML形式に変換
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlDocument, "text/xml");
    let rss = doc.documentElement.getElementsByTagName("item");

    //HTMLタグの作成
    for (let i = 0; i < 6; i++) {
      //RSSから取得したタイトルとリンク情報を格納
      let rssTitle = rss[i].getElementsByTagName("title")[0].textContent;
      let rssLink = rss[i].getElementsByTagName("link")[0].textContent;

      //テンプレート文字列を使ってアンカータグを作成
      const tagString = `<a href="${rssLink}">${rssTitle}</a>`;

      //タグに出力
      document.getElementById("RSSNewsFeed").innerHTML += "・" + tagString + "  ";
    }
  };
  const URL = 'https://www.nhk.or.jp/rss/news/cat3.xml';
  fetch(URL)
    .then(response => response.text())
    .then(xmlData => viewXML(xmlData));
}


//占いお知らせ関数（アーカイブ）
function notice_fortune() {
  var n
  const now = new Date;
  var nowminute = now.getMinutes();

  n = nowminute % 4;


  //今日の日付を取得してYY/MM/DDの形式に
  const today = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + set2fig(now.getDate());

  //githubからjsonを取得
  const url = "https://raw.githubusercontent.com/twoooooda/Monitor-at-laboratory/main/getAPI/json_fortune.json";

  fetch(url)
    .then(response => response.json())
    .then(data => { //占いのランキングをソート
      fortune = data["horoscope"][today].sort(function (a, b) {
        return (a.rank < b.rank) ? -1 : 1;
      });

      document.getElementById("todaysFortune").innerHTML = "<font color=\"#ff1493\">★" + today + "の占い★</font>";

      document.getElementById("1stfortune").innerHTML = "<font size=\"4\"><b>" + String(n * 3 + 1) + "位は"
        + fortune[n * 3]["sign"] + "！</b></font>   "
        + fortune[n * 3]["content"]
        + "  ラッキーアイテムは<b>" + fortune[n * 3]["item"] + "</b>!";

      document.getElementById("2ndfortune").innerHTML = "<font size=\"4\"><b>" + String(n * 3 + 2) + "位は"
        + fortune[n * 3 + 1]["sign"] + "！</b></font>   "
        + fortune[n * 3 + 1]["content"]
        + "  ラッキーアイテムは<b>" + fortune[n * 3 + 1]["item"] + "</b>!";

      document.getElementById("3rdfortune").innerHTML = "<font size=\"4\"><b>" + String(n * 3 + 3) + "位は"
        + fortune[n * 3 + 2]["sign"] + "！</b></font>   "
        + fortune[n * 3 + 2]["content"]
        + "  ラッキーアイテムは<b>" + fortune[n * 3 + 2]["item"] + "</b>!";

    })
    .catch(error => console.log(error));
}