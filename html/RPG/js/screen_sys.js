const start = document.getElementById('start');
const text_field = document.getElementById('text_field');
const character_field = document.getElementById('character_field');
const command_field = document.getElementById('command_field');
const status_field = document.getElementById('status_field');
const monsname_field = document.getElementById('monsname_field');

//はじめるが押されたら
start.onclick = function(){
start.remove();
document.getElementById('title').remove();
let status_border = document.getElementById("status_field");
    status_border.style = "border: 1px solid #ffffff;";
let command_border = document.getElementById("command_field");
    command_border.style = "border: 1px solid #ffffff;";
let text_border = document.getElementById("text_field");
    text_border.style = "border: 1px solid #ffffff;";
    text_disp('character_field','名前を入力してください','name_input_text',45,true);
text_field.innerHTML = 
        '<form>' +
            '<input type="text" maxlength ="5" class ="input_form" id ="input-name"></input>' +
        '</form>'
document.getElementById('input-name').focus();
        window.document.onkeydown = function(event){
            if (event.key === 'Enter') {
                status_set();
            }
        }
}
/* 名前を設定　名前ステータスを表示 */
function status_set(){
    let name = document.getElementById("input-name");
    if(name.value == ""){
        name = 'ゆうしゃ';
    }else {
        name = name.value;
    }
    setHeroName(name);
    document.getElementById('status_field').innerHTML = 
    `<p class ="status_name" id ="name-set">${name}</p>` +
    `<span class ="status_span">LV　${LV}</span><br>` +
    `<span class ="status_span">HP　${HP}</span><br>` +
    `<span class ="status_span">MP　${MP}</span>`
    
    text_field.innerHTML = '';
    character_field.innerHTML = '';
        town_menu();
}

function save(){
    
}
function battle_screen(){
    character_field.innerHTML = '';
}
