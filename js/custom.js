//variable declaration

//Available alphabets
var Hiragana=['a','あ', 'i', 'い', 'u', 'う','e','え', 'o','お',
    'ka','か', 'ki', 'き', 'ku', 'く','ke','け', 'ko','こ',
    'ga','が', 'gi', 'ぎ', 'gu', 'ぐ','ge','げ', 'go','ご',
    'sa','さ', 'shi', 'し', 'su', 'す','se','せ', 'so','そ',
    'za','ざ', 'ji', 'じ', 'zu', 'ず','ze','ぜ', 'zo','ぞ',
    'ta','た', 'chi', 'ち', 'tsu', 'つ','te','て', 'to','と',
    'da','だ', 'ji', 'ぢ', 'zu', 'づ','de','で', 'do','ど',
    'na','な', 'ni', 'に', 'nu', 'ぬ','ne','ね', 'no','の',
    'ha','は', 'hi', 'ひ', 'fu', 'ふ','he','へ', 'ho','ほ',
    'ba','ば', 'bi', 'び', 'bu', 'ぶ','be','べ', 'bo','ぼ',
    'pa','ぱ', 'pi', 'ぴ', 'pu', 'ぷ','pe','ぺ', 'po','ぽ',
    'ma','ま', 'mi', 'み', 'mu', 'む','me','め', 'mo','も',
    'ya','や', null, null, 'yu', 'ゆ', null, null, 'yo','よ',
    'ra','ら', 'ri', 'り', 'ru', 'る','re','れ', 'ro','ろ',
    'wa','わ', null, null, null, null, null, null, 'wo','を',
    'n','ん',null, null, null, null, null, null, null, null];

var Katakana=['a','ア', 'i', 'イ', 'u', 'ウ','e','エ', 'o','オ',
    'ka','カ', 'ki', 'キ', 'ku', 'ク','ke','ケ', 'ko','コ',
    'ga','ガ', 'gi', 'ギ', 'gu', 'グ','ge','ゲ', 'go','ゴ',
    'sa','サ', 'shi', 'シ', 'su', 'ス','se','セ', 'so','ソ',
    'za','ザ', 'ji', 'ジ', 'zu', 'ズ','ze','ゼ', 'zo','ゾ',
    'ta','タ', 'chi', 'チ', 'tsu', 'ツ','te','テ', 'to','ト',
    'da','ダ', 'ji', 'ヂ', 'zu', 'ヅ','de','デ', 'do','ド',
    'na','ナ', 'ni', 'ニ', 'nu', 'ヌ','ne','ネ', 'no','ノ',
    'ha','ハ', 'hi', 'ヒ', 'fu', 'フ','he','ヘ', 'ho','ホ',
    'ba','バ', 'bi', 'ビ', 'bu', 'ブ','be','ベ', 'bo','ボ',
    'pa','パ', 'pi', 'ピ', 'pu', 'プ','pe','ペ', 'po','ポ',
    'ma','マ', 'mi', 'ミ', 'mu', 'ム','me','メ', 'mo','モ',
    'ya','ヤ', null, null, 'yu', 'ユ', null, null, 'yo','ヨ',
    'ra','ラ', 'ri', 'リ', 'ru', 'ル','re','レ', 'ro','ロ',
    'wa','ワ', null, null, null, null, null, null, 'wo','ヲ',
    'n','ン', null, null, null, null, null, null, null, null];

var Kanji =   ['ichi (1)', '一', 'ni (2)','二', 'san (3)','三',
                'yon (4)', '四', 'go (5)', '五','roku (6)', '六',
                'nana (7)','七', 'hachi (8)','八', 'kyuu (9)', '九',
                'juu(10)', '十', 'hyaku (100)', '百', 'sen (1000)', '千',
                ' man (10.000)', '万', 'rei (zero)', '零', 'nani (what)', '何',
                'hi (day/sun)','日','gatsu (month)', '月', 'tera (temple)', '寺',
                'ho (fire)', '火', 'mizu (water)','水', 'tsuchi (earth)','土',
                'ki (tree)', '木','oo (large)', '大','chii (small)','小',
                 'naka (inside)', '中', 'ue (on)','上','shita (under)', '下',
                'migi (right)','右','hidari (left)','左', 'ishi (stone)','石',
                'hito (person)','人','soto (outside)','外','kuchi (mouth)','口',
                'me (eye)', '目', 'te (hand)', '手', 'ashi (foot)', '足'];

var Cyrillic=['a', 'а', 'b', 'б', 'v',  'в', 'g',  'г', 'd', 'д', 'e', 'е',
    'ë', 'ё',	 'ž', 'ж', 'z',  'з', 'i',  'и','j', 'й',  'k', 'к',
    'l', 'л', 'm', 'м', 'n',  'н', 'o',  'о', 'p', 'п', 'r', 'р',
    's', 'с', 't', 'т', 'u',  'у', 'f',  'ф', 'h', 'х', 'c', 'ц',
    'č', 'ч', 'š', 'ш', 'šč', 'щ', 'y', 'ы',  'è', 'э', 'û', 'ю',
    'â', 'я', null, null, null, null, null, null, null, null, null, null];


var Hangul=['g','ㄱ', 'n', 'ㄴ', 'd', 'ㄷ','r/l','ㄹ', 'm','ㅁ',
            'b','ㅂ', 's', 'ㅅ', 'ng','ㅇ' ,'j', 'ㅈ','ch','ㅊ',
            'k', 'ㅋ', 't', 'ㅌ', 'p', 'ㅍ', 'h','ㅎ', null, null,
            'kk', 'ㄲ', 'tt', 'ㄸ', 'pp', 'ㅃ', 'ss', 'ㅆ', 'jj', 'ㅉ',
            'a', 'ㅏ', 'eo', 'ㅓ', 'o', 'ㅗ', 'u', 'ㅜ', 'eu', 'ㅡ',
            'i', 'ㅣ', 'ya', 'ㅑ', 'yeo', 'ㅕ', 'yo', 'ㅛ', 'yu', 'ㅠ',
            'ae', 'ㅐ', 'yae', 'ㅒ', 'e', 'ㅔ', 'ye', 'ㅖ', 'ui', 'ㅢ',
            'wa', 'ㅘ', 'wae', 'ㅙ', 'oe', 'ㅚ', 'wo', 'ㅝ', 'we', 'ㅞ',
            'wi', 'ㅟ', null, null, null, null, null, null, null, null];


//page information
var info = {
    hiragana:{
        array: Hiragana,
        title:"Hiragana ( ひらがな )",
        description:"Press on the letters to change between hiragana and romaji.",
        url:"hiragana",
        rows:5,
        buttonshape:"square",
        buttonname: "Hiragana (あ)"
    },
    katakana:{
        array: Katakana,
        title:"Katakana ( カタカナ )",
        description:"Press on the letters to change between katakana and romaji.",
        url:"katakana",
        rows:5,
        buttonshape:"square",
        buttonname:"Katakana (ア)"
    },
    kanji:{
        array: Kanji,
        title:"Kanji (漢字)",
        description:"Press on the letters to change between kanji and romaji.",
        url:"kanji",
        rows:3,
        buttonshape:"rectangle",
        buttonname:"Kanji (学)"
    },
    cyrillic:{
        array: Cyrillic,
        title:"Russian Cyrillic (кириллица)",
        description:"Press on the letters to change between cyrillic and their latin counterparts.",
        url:"cyrillic",
        rows:6,
        buttonshape:"square",
        buttonname:"Russian Cyrillic (Ж)"
    },
    hangul:{
        array: Hangul,
        title:"Korean Hangul(한글)",
        description:"Press on the letters to change between hangul and their latin counterparts.",
        url:"hangul",
        rows:5,
        buttonshape:"square",
        buttonname:"Korean Hangul (ㅎ)"
    }

};

var correct_answers, wrong_answers;

//Set main menu to visible while loading
window.onload = function() {
    GenerateMainMenu(info);
    var target = document.getElementById("main-menu");
    target.style.display = "block";
};

//switch between pages
function goTo(x){
    var div = document.getElementsByClassName("hidden-menu");
    for(var i=0;i<div.length;i++){
        div[i].style.display = "none";}
    var target = document.getElementById(x);
    target.style.display = "block";
}



//generate Main Menu
function GenerateMainMenu(source){
    for(item in source) {
        CreateMainMenuButton(source[item]);
    }
    goTo("main-menu");
}

function CreateMainMenuButton(source){
    //create Row
    var row = document.createElement('div');
    row.className="row";
    row.id="menu-row-"+source.url;
    var target = document.getElementById("main-menu-container");
    target.appendChild(row);
    //create Button
    button = document.createElement("BUTTON");
    var text = document.createTextNode(source.buttonname);
    button.type="button";
    button.className="btn btn-default";
    button.appendChild(text);
    button.onclick = (function(target) {
        return function() {
            GenerateMenu(target);
        };
    })(source);
    row.appendChild(button);
}

//generate Individual Menus
function GenerateMenu(source){
    goTo("language-menu");
    var container = document.getElementById("language-menu-container");
    var title = document.getElementById("language-menu-title");
    title.innerHTML=source.title;
    var table_button = document.getElementById("table-button");
    table_button.onclick = (function(target) {
        return function() {
            GenerateTable(target)
        };
    })(source);
    var quiz_button = document.getElementById("quiz-button");
    quiz_button.onclick = (function(target) {
        return function() {
            TakeQuiz(target)
        };
    })(source);
}

//Table Functions

//change text on click
function toggleText(button_id,a,b)  {
    var text = document.getElementById(button_id).firstChild;
    text.data = text.data == a ? b : a;
}

function GenerateTable(source){

    var counter=0, row=1;
    goTo('table');
    ResetTable();
    document.getElementById("table-title").innerHTML=source.title;
    document.getElementById("table-description").innerHTML=source.description;
    document.getElementById("table-back-button").onclick = (function(a) {
        return function() {
            GenerateMenu(a);
        };
    })(source);
    while(counter<source.array.length-1){
        CreateRow(row);
        for(var i=0;i<source.rows;i++){
            if(source.array[counter]||source.array[counter]===null){
                DecideButtonType(source.array[counter+1], source.array[counter],"table-row-"+row,source.rows, source.buttonshape);}
            counter+=2;
        }
        row++;

    }
}
function CreateRow(num){
    var div = document.createElement('div');
    div.className="row table-row force-inline";
    div.id="table-row-"	+num;
    var target = document.getElementById("table-inner-container");
    target.appendChild(div);
}

function DecideButtonType(face_a, face_b,target_ID,row_length, button_shape){
    if(!document.getElementById(face_b)&&(face_a!==null||face_b!==null)){
        CreateButton(face_a, face_b,target_ID,row_length, face_a, "btn btn-table", button_shape );
    }
    if(face_a===null||face_b===null){
        CreateButton(face_a, face_b,target_ID,row_length,"empty-space", "btn btn-table btn-hidden btn-disabled", button_shape);
    }
}

function CreateButton(face_a, face_b,target_ID,row_length,button_id, button_class, button_shape){
    var button, t, target, size, font_size=5;
    if(window.innerWidth<1300){
        if(button_shape == "square"){
            size=75/row_length;
        }
        else{
            size=80/row_length;
            font_size=4;
        }
    }
    else{
        if(button_shape == "square"){
            size=40/row_length;
            font_size=3;
        }
        else{
            size=50/row_length;
            font_size=2;
        }
    }


    button = document.createElement("BUTTON");
    t = document.createTextNode(face_a);
    button.type="button";
    button.className=button_class;
    button.id=button_id;
    if(button_shape === "square"){
        button.setAttribute("style", "width:"+size+"vw ;height:"+size+"vw; font-size: "+font_size+"vw;");}
    else{
        button.setAttribute("style", "width:"+size+"vw ;height:"+size/2+"vw; font-size: "+font_size+"vw;");}
    button.appendChild(t);
    button.onclick = (function(a,b,c) {
        return function() {
            toggleText(a,b,c);
            toggleButtonColor(a);
        };
    })(button.id,face_a, face_b);
    target = document.getElementById(target_ID);
    target.appendChild(button);
}

function toggleButtonColor(x){
    var target = document.getElementById(x);
    console.log(target.className);
    if(target.className==="btn btn-table"){
        target.className="btn btn-table btn-reverse";}
    else if(target.className==="btn btn-table btn-reverse"){
        target.className="btn btn-table";}
}

function ResetTable(){
    var target = document.getElementById("table-inner-container");
    $(target).empty();
}



//Quiz Functions

function TakeQuiz(source){
    ResetScore();
    goTo('quiz');
    document.getElementById("quiz-title").innerHTML=source.title;
    document.getElementById("quiz-back-button").onclick = (function(a) {
        return function() {
            GenerateMenu(a);
        };
    })(source);
    document.getElementById("quiz-skip-button").onclick = (function(a) {
        return function() {
            MakeQuestion(a);
        };
    })(source.array);
    document.getElementById("quiz-skip-button").className += " btn-skip";
    MakeQuestion(source.array);
    var buttons = document.getElementsByClassName("btn-quiz");
    for(var i=0; i<4;i++){
        var button_id=buttons[i].id;
        buttons[i].onclick = (function(opt1, opt2) {
            return function() {
                checkAnswer(opt1, opt2);
                MakeQuestion(source.array);
                UpdateScore();
            };
        })(button_id,source.array);
    }
}

function UpdateScore(){
    var total= correct_answers+wrong_answers;
    var result;
    result = (correct_answers*100)/total;
    document.getElementById("quiz-percentage").innerHTML=(correct_answers+" ("+result.toFixed(2))+"%) correct answers out of "+total+"!";
}

function ResetScore(){
    document.getElementById("quiz-percentage").innerHTML=(" ");
    window.correct_answers=0;
    window.wrong_answers=0;
}

function MakeQuestion(x){
    var type=Math.floor(Math.random() * 2);
    if (type===0){
        type=type-1;
    }
    var question;
    do{
        question=Math.floor(Math.random() * x.length-2)-type;}while( x[question]===null||question<0);
    var correct_answer, temp;
    if(question %2===0){
        correct_answer=question+1;
    }
    else{
        correct_answer=question-1;
    }
    document.getElementById("question-quiz").firstChild.data=x[question];

    var buttons = document.getElementsByClassName("btn-quiz");

    var answer=[];

    for(var i=0; i<4;i++){
        do{
            temp=Math.floor(Math.random() * x.length-2)+type;
        }while(question%2===temp%2||x[temp]===null||temp<0||answer.includes(x[temp])||temp===correct_answer);//prevent any duplicates or any empty tiles
        answer[i]=x[temp];
    }
    var correct_num=Math.floor(Math.random() * 4);
    answer[correct_num]=x[correct_answer];

    for(i=0; i<4;i++){
        buttons[i].firstChild.data = answer[i];
    }

}


function checkAnswer(button_id,x){
    var correct;
    var question=x.indexOf(document.getElementById("question-quiz").firstChild.data);
    var answer=x.indexOf(document.getElementById(button_id).firstChild.data);
    if((question%2===0&&question-answer===-1)||(question%2!==0&&question-answer===1)){
        correct=true;
    }
    else{
        correct=false;
    }
    if(correct){
        correct_answers++;
    }
    else{
        wrong_answers++;
    }
    return(correct);
}


//update app
function checkForUpdate()
{
    if (window.applicationCache != undefined && window.applicationCache != null)
    {
        window.applicationCache.addEventListener('updateready', updateApplication);
    }
}

function updateApplication(event)
{
    if (window.applicationCache.status != 4) return;
    window.applicationCache.removeEventListener('updateready', updateApplication);
    window.applicationCache.swapCache();
    window.location.reload();
}