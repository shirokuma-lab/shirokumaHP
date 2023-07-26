
function Battle(){
    document.getElementById('probability_field').innerHTML = '';
    Lottery(); //Battle_sys
    mons_display(mons_category); //monster_status
    switch(mons_category){
        case 1:
        case 2:
        case 3:
        case 4:
        battle_screen();
        break;
        //しろくま
        case 5:
            shirokuma_event();
            break;
        //先生
        case 6:
            fuji_event();
            break;
    }
    return;
}


function Boss_battle(){
    document.getElementById('probability_field').innerHTML = '';
    mons_display(7);
    battle_screen();
}

let mons_category = 0;
//呼び出し元:Battle_sys Battle() 戻り先:Battle_sys Battle()
function Lottery(){
    if(r = random_100() >= 65){
        mons_category = 1;
    }else if(r = random_100() >= 45){
        mons_category = 2;
    }else if(r = random_100() >= 30){
        mons_category = 3;
    }else if(r = random_100() >= 15){
        mons_category = 4;
    }else if(r =random_100() >= 8){
        mons_category = 5;
    }else {
        mons_category = 6;
    }
}

//モンスターのステータス設定 呼び出し元: monster_status mons_display()
function monster_status_set(mons_category){
    monster(mons_category); //monster_status
    text_disp('text_field',`${mons_name}があらわれた!!`,'text',35,true);
    return;
}
// 0 通常 1 勝ち 2 負け
let judge = 0;

//戦闘画面
function battle_screen(){
    judge = 0;
    command_field.innerHTML =
    '<span class ="choice_command" type ="button" id ="attack" onclick ="attack()">こうげき</span>' +
    '<span class ="choice_command" type ="button" id ="heal" onclick ="heal()">かいふく</span>' +
    `<span class ="choice_command" type ="button" id ="away" onclick ="forest(${boss_probability})">にげる</span>`
    monsname_field.innerHTML = `${mons_name}`;
    
    

}
let dmg = 0;

function attack(){
    if(mons_spd > SPD){
        HP = damage_process(mons_name,mons_atk,Hero_name,HP,DEF);
        if(HP <= 0){
            judge = 2;
        }
        if(HP > 0){
            setTimeout(function(){mons_hp = damage_process(Hero_name,ATK,mons_name,mons_hp,mons_def)},2000);
            
            if(mons_hp <= 0){
                judge = 1;
            }
        }
        status_reload();
    }else {
        mons_hp = damage_process(Hero_name,ATK,mons_name,mons_hp,mons_def);
        if(mons_hp <= 0){
            judge = 1;
        }
        if(mons_hp > 0){
            setTimeout(function(){HP = damage_process(mons_name,mons_atk,Hero_name,HP,DEF)},2000);
            if(HP <= 0){
                judge = 2;
            }
        }
        status_reload();
    }

    if(mons_hp < mons_maxhp / 4){
        monsname_field.style.color = "#ff7f50";
    }else if(mons_hp < mons_maxhp / 2){
        monsname_field.style.color = "#ffff00";
    }

    if(judge == 1){
        text_disp('text_field',`${mons_name}を倒した!!! ${mons_exp}EXPを獲得!!`,'text',45,true);
        monsname_field.style.color = "#ffffff";
        exp_cal(mons_exp);
        forest(boss_probability);
    }else if(judge == 2){
        text_disp('text_field',`${Hero_name}はしんでしまった...`,'text',35,true);
        map_return();
    }
}

//攻撃側名前、攻撃側HP、攻撃側ATK、受側名前、受側HP、受側DEF
function damage_process(A_name,A_atk,R_name,R_hp,R_def){
    text_disp('text_field',`${A_name}のこうげき!!`,'text',20,true);
    dmg = Math.floor(A_atk / 2 - R_def / 4);
    dmg += random(4)
    if(dmg <= 0){
        dmg = 1;
    }
    console.log(dmg);
    setTimeout(text_disp,1000,'text_field',`${R_name}に${dmg}のダメージ!!`,'text',20,true);
    R_hp = R_hp - dmg;
    if(R_hp <= 0){
        R_hp = 0;
    }
    status_reload();
    return R_hp;
}

