const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//場所のid,内容,クラスの名前,表示速度
function text_disp(id,text,class_name,speed,viability){
    if(viability == true){
        var char_text = text.split("");
        var text_box = "";
    (async () => {
        for(let i = 0;i < char_text.length;i++){
            document.getElementById(id).innerHTML = '<p class ="' + class_name + '" id ="text">' + text_box + char_text[i] + '</p>'
            text_box = text_box + char_text[i];
                await _sleep(speed);
        }
    })();
}


}