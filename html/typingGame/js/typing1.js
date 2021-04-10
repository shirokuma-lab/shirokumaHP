'use strict';
const textList = [
  'red','blue','green','pink','black','white','gold','silver','gray','brown','yellow','purple','orange','navy','lightpink',
  'lightgreen','snow','skyblue','lime','olive','aqua','lavender','tomato','darkblue','peru','violet','plum','maroon','chocolate',
  'salmon','beige','cyan','ivory','cornsilk','indigo','teal'
];
const syogo = ["おさるさん", "パソコン初心者", "ある程度キーボード打てる奴", "パソコン中級者", "未来を支えるエンジニア予備軍", "パソコン上級者", "タイピングマスター", "IT魔神", "かみさま"]
let count1 = 0;
let count2 = 0;
let img;
let startRnd = Math.floor(Math.random() * textList.length)
let toi = textList[startRnd];
let sec = 80;
let point = 0;


    //スタートボタンが押された時に起動する関数
    document.getElementById('start').onclick = function(){
      textList.splice(startRnd, 1);
      //タイマーの生成
      let newTimer = document.createElement("div");
      newTimer.setAttribute("id", "timer");
      timerFrem.appendChild(newTimer);
      document.getElementById('timer').textContent = sec;

      //イラストを消す
      img = document.getElementById('hantei');
      img.src = "";
      img.width = "";
      img.height = "";
      //ホームボタンを消す
      document.getElementById("homeText").textContent = "";

      //入力フォームの生成
      let newText = document.createElement("input");
      newText.setAttribute("type","text");
      newText.setAttribute("id","kaito");
      textFrem.appendChild(newText);

      inputForm.kaito.focus();
      document.getElementById('startButton').textContent = '';
      document.getElementById('mondai').textContent = toi;
      document.getElementById('startText').textContent = '';
      document.getElementById('cnt1').textContent = '正解数 : 0';
      document.getElementById('cnt2').textContent = '入力ミス : 0';

      //タイマーの作成,起動の関数
      setInterval(function(){
        sec--;
        document.getElementById('timer').textContent = sec;

        //時間切れになった時に「終了」と「結果」と「もう一度あそぶ」を表示
        if (sec == 0) {
          //終了を表示
          document.getElementById('gameAll').textContent = "";
          let endGame = document.createElement("img");
          endGame.setAttribute("src", "../img/end.png");
          endGame.setAttribute("id", "endImg");
          gameAll.appendChild(endGame);

          //結果を表示
          point = count1 * 100 - count2 * 50;
          if (point < 0) {
            point = 0;
          }
          document.getElementById('resultAll').textContent = "あなたの得点は" + point + "点です。";

          //称号を表示
          if (point <= 500) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[0] + "」です。"
          }else if ((500 < point) && (point <= 1000)) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[1] + "」です。"
          }else if ((1000 < point) && (point <= 1500)) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[2] + "」です。"
          }else if ((1500 < point) && (point <= 2000)) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[3] + "」です。"
          }else if ((2000 < point) && (point <= 2500)) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[4] + "」です。"
          }else if ((2500 < point) && (point <= 3000)) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[5] + "」です。"
          }else if ((3000 < point) && (point <= 3500)) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[6] + "」です。"
          }else if ((3500 < point) && (point <= 4000)) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[7] + "」です。"
          }else if (4000 < point) {
            document.getElementById('syogo').textContent = "あなたの称号は「" + syogo[8] + "」です。"
          }

          //もう一度遊ぶ

          let againGame = document.createElement("a");
          againGame.setAttribute("href", "kantan.html");
          againGame.setAttribute("id", "returnGame");

          again.appendChild(againGame);
          document.getElementById('returnGame').textContent = "もう一度遊ぶ";

        }
      },1000);

    }

      //問題と回答を照らし合わせる関数
      function kidou(){
        let result = document.getElementById('kaito').value;

        if (toi == result) {
          img = document.getElementById('hantei');
          img.src = "../img/seikai.png";
          img.width = 320;
          img.height = 265;
          count1++;
          init();
          document.getElementById('cnt1').textContent = '正解数 : '+ count1;


        }else{
          img = document.getElementById('hantei');
          img.src = "../img/huseikai.png";
          img.width = 320;
          img.height = 265;
          document.getElementById('kaito').value = '';
          inputForm.kaito.focus();
          count2++;
          document.getElementById('cnt2').textContent = '入力ミス : '+ count2;
        }
      }

      //初期化の関数
      function init() {
        const rnd = Math.floor(Math.random() * textList.length);
        document.getElementById('mondai').textContent = textList[rnd];
        textList.splice(rnd, 1);
        inputForm.kaito.value = '';
        inputForm.kaito.focus();
        toi = document.getElementById('mondai').textContent;

      }