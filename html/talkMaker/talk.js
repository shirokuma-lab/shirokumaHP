'use strict';

let netaList = ["小さい頃好きだったもの", "好きな食べ物", "本気の自慢話", "マイブーム", "好きな異性のタイプ", "好きな芸能人", "趣味", "めちゃくちゃオススメのお店", "やらかした事", "卒業する前に一度はやりたい事",
"人生で一度はやりたい事", "恋人にしたい人の絶対条件","今の目標とすることは"];
  var shuffle;
  var flg = true;
//スタートをクリックした時に起動する関数
  document.getElementById('button').onclick = function(){
    //文字がシャッフル表示される関数
    if(flg){
      flg = false;
      shuffle = setInterval(function(){
        const rnd = Math.floor(Math.random() * netaList.length);
        document.getElementById('neta').textContent = netaList[rnd];
      },1);
    }
    //ストップをクリックした時に起動する関数
    document.getElementById('button2').onclick = function () {
      flg = true;
      clearInterval(shuffle);
    }
  }
