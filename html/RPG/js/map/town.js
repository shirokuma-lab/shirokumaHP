function town_menu(){
    allheal();
    character_field.innerHTML = '';
    text_disp('text_field','どこに向かう?','text',75,true);
    command_field.innerHTML =
        '<span class ="choice_command" type ="button" id ="destination" onclick ="destination()">街を出る</span>'
}
function destination(){
    character_field.innerHTML = '';
    command_field.innerHTML =
        '<span class ="choice_command" type ="button" id ="forest-button" onclick ="forest(0)">もり　</span>' +
        '<span class ="choice_command" type ="button" id ="map_return" onclick ="map_return()">街に戻る</span>'
}
