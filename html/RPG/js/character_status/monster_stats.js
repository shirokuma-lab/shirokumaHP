let mons_name ="";
let mons_hp = 0;
let mons_atk = 0;
let mons_def = 0;
let mons_spd = 0;
let mons_exp = 0;
let mons_maxhp = 0;
//
function monster(mons_category){
    switch(mons_category){
        case 1:
            set_slime_status();
            break;
        case 2:
            set_bat_status();
            break;
        case 3:
            set_spider_status();
            break;
        case 4:
            set_bear_status();
            break;
        case 5:
            set_shiro_status();
            break;
        case 6:
            set_teacher_status();
            break;
        case 7:
            set_boss_status();
            break;
    }

}

function set_slime_status(){
    mons_name = "スライム";
    mons_hp = 6 + LV + random(11);
    mons_atk = 3 + LV + random(3);
    mons_def = 2 + LV + random(3);
    mons_spd = 3 + LV + random(4);
    mons_exp = 2 + LV + random(3);
    mons_maxhp = mons_hp;
}


function set_bat_status(){
    mons_name = "コウモリ";
    mons_hp = 9 + LV + random(9);
    mons_atk = 4 + LV + random(5);
    mons_def = 3 + LV + random(7);
    mons_spd = 8 + LV + random(10);
    mons_exp = 4 + LV + random(3);
    mons_maxhp = mons_hp;
}


function set_spider_status(){
    mons_name = "スパイダー";
    mons_hp = 12 + LV + random(13);
    mons_atk = 6 + LV + random(5);
    mons_def = 5 + LV + random(7);
    mons_spd = 8 + LV + random(10);
    mons_exp = 8 + LV + random(3);
    mons_maxhp = mons_hp;
}


function set_bear_status(){
    mons_name = "クマ";
    mons_hp = 25 + LV + random(11);
    mons_atk = 10 + LV + random(8);
    mons_def = 8 + LV + random(8);
    mons_spd = 10 + LV + random(10);
    mons_exp = 10 + LV + random(5);
    mons_maxhp = mons_hp;
}


function set_shiro_status(){
    mons_name = "しろくま先生";
    mons_hp = shorkuma_HP = 4690;
    mons_maxhp = mons_hp;
}

function set_teacher_status(){
mons_name = "藤井先生";
mons_hp = 211;
mons_maxhp = mons_hp;
}

function set_boss_status(){
    mons_name = "k-fujii-mkⅡ"
    mons_hp = 200 + LV;
    mons_atk = 30 + LV + random(8);
    mons_def = 25 + LV + random(8);
    mons_spd = 28 + LV + random(10);
    mons_exp = 150 + LV + random(5);
    mons_maxhp = mons_hp;
}

/*モンスターを表示する 呼び出し元: Battle_sys Battle() 
                     呼び出し先: Battle_sys monster_status_set
                     戻り先: Battle_sys Battle() */
function mons_display(mons_category){
    switch(mons_category){
         case 1:
            character_field.innerHTML = 
             '<img src="image/fantasy_game_character_slime.png" class ="slime">'
             monster_status_set(1);
             break;
             
         case 2:
             character_field.innerHTML = 
             '<img src="image/halloween_mark_koumori.png" class ="slime">'
             monster_status_set(2);
             break;
                 
         case 3:
             character_field.innerHTML = 
             '<img src="image/bug_kumo_ito.png" class ="slime">'
             monster_status_set(3);
             break;
             
         case 4:
             character_field.innerHTML = 
             '<img src="image/animal_kowai_kuma.png" class ="slime">'
             monster_status_set(4);
             break;
 
         case 5:
             character_field.innerHTML = 
             '<img src="image/animal_bear_hokkyoku.png" class ="slime">'
             monster_status_set(5);
             break;
 
         case 6:
             character_field.innerHTML = 
             '<img src="image/1685316248712.png" class ="slime">'
             monster_status_set(6);
             break;
            
         case 7:
            console.log("hgdhgdkhgchgck")
            character_field.innerHTML =
            '<img src="image/3_20230619222326.png" class ="k-fujii-mk2">'
            monster_status_set(7);
            break;
    }
    
    

 }
 
 function shirokuma_event(){
    command_field.innerHTML = '';
    //場所のid,内容,クラスの名前,表示速度
    setTimeout(text_disp,1000,'text_field','しろくま先生に癒された!! MP HP 回復!!','text',40,true);
    command_field.innerHTML = '';
    setTimeout(forest,3000,boss_probability);
    allheal()
    return;
}

function fuji_event(){
                                //場所のid,内容,クラスの名前,表示速度
    setTimeout(text_disp,1200,'text_field','ガシガシするか?','text',40,true);
    command_field.innerHTML = 
        '<span class ="choice_command" type ="button" id ="yes" onclick ="yes()">する　</span>' +
        '<span class ="choice_command" type ="button" id ="no" onclick ="no()">しない</span>';
    return;
}

function yes(){
    command_field.innerHTML = '';
    text_disp('text_field',`その調子で頑張れ!! LV${LV} → ${LV + 1}`,'text',40,true);
    LV = LV + 1;
    status_field.innerHTML =
        `<p class ="status_name" id ="name-set">${Hero_name}</p>` +
        `<span class ="status_span">LV　${LV}</span><br>` +
        `<span class ="status_span">HP　${HP}</span><br>` +
        `<span class ="status_span">MP　${MP}</span>`
        ATK = ATKset[LV];
        DEF = DEFset[LV];
        SPD = SPDset[LV];
        EXP = EXPset[LV];
    setTimeout(forest,3000,boss_probability);
}

function no(){
    command_field.innerHTML = '';
    text_disp('text_field',`最近たるみすぎちゃうか？`,'text',40,true);
    HP = HP - 10;
    status_reload();
    if(HP <= 0){
        HP = 0;
        text_disp('text_field',`${Hero_name}はしんでしまった...`,'text',35,true);
        map_return();
    }
    setTimeout(forest,3000,boss_probability);
}