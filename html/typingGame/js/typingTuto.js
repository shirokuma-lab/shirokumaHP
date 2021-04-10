'use strict';
    const imgList = ["../img/ss1.png","../img/ss2.png","../img/ss3.png","../img/ss4.png","../img/ss5.png"]
    let pageNum = 0;

    document.getElementById('migi').onclick = function(){
      if (pageNum < 4) {
        document.getElementById('tutoimg').src = imgList[pageNum + 1];
        pageNum++;
        document.getElementById('pages').textContent = (pageNum + 1) + "/5";
      }
    }
    document.getElementById('hidari').onclick = function(){
      if (pageNum > 0) {
        document.getElementById('tutoimg').src = imgList[pageNum - 1];
        pageNum--;
        document.getElementById('pages').textContent = (pageNum + 1) + "/5";
      }
    }