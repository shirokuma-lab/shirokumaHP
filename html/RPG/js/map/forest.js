let boss_probability = 0;
function forest(bp){
    
    if(bp > 0){
        bp = bp - 10;
        if(bp < 0){
            bp = 0;
        }
    }
    character_field.innerHTML ='';
    boss_probability = bp;
    text_field.innerHTML = '';
    monsname_field.innerHTML = '';
    probability_field.innerHTML =
    '<p class ="probability" id ="probability">BOSS出現' + boss_probability + '%</p>'
    command_field.innerHTML =
    '<span class ="choice_command" type ="button" id ="move" onclick ="move()">すすむ</span>' +
    '<span class ="choice_command" type ="button" id ="map_return" onclick = "map_return()">街に戻る</span>'

}