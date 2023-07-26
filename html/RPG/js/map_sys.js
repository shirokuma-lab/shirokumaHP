let r = 0;
function move(){
    boss_probability = boss_probability + Math.floor(Math.random() * 4 + 1);
    if(boss_probability >= 100){
        boss_probability = 100;
    }
    document.getElementById('probability_field').innerHTML =
    '<p class ="probability" id ="probability">BOSS出現' + boss_probability + '%</p>';

        if(boss_probability > random_100()){
            Boss_battle();
            console.log('ボス');
  }else if(40 >= random_100()){
            console.log('バトル');        
            Battle();
  }
}

function map_return(){
    document.getElementById('probability_field').innerHTML = '';
    character_field.innerHTML = '';
    return town_menu();
}