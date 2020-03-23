filter_Button = document.getElementById("filter_btn");
keyword_Button = document.getElementById("keyword_btn");
program_Button = document.getElementById("pb_switch");
kfb_Button = document.getElementById("kfb_switch");
sfb_Button = document.getElementById("sfb_switch");
keyword_function_box = document.getElementById("keyword_function_box");
search_function_box = document.getElementById("search_function_box");


var pro_on = false;
var kfb_on = false;
var sfb_on = false;


// if(program_Button){
//     console.log(program_Button)
// }


function filter_ButtonClick() {

    filter_Button.style.backgroundColor = " #4834d4";
    filter_Button.style.borderColor = "#4834d4";
    filter_Button.style.color = "white";
    keyword_Button.style.backgroundColor = " #ccc";
    keyword_Button.style.borderColor = "#ccc";
    keyword_Button.style.color = "gray";

    keyword_function_box.style.display="flex";
    search_function_box.style.display="flex";

    keywordlist_box.style.display="none";
}

function keyword_ButtonClick() {

    keyword_Button.style.backgroundColor = " #4834d4";
    keyword_Button.style.borderColor = "#4834d4";
    keyword_Button.style.color = "white";
    filter_Button.style.backgroundColor = " #ccc";
    filter_Button.style.borderColor = "#ccc";
    filter_Button.style.color = "gray";


    keyword_function_box.style.display="none";
    search_function_box.style.display="none";

    keywordlist_box.style.display="flex";
    
}

function program_ButtonClick() {
    // 프로그램 버튼 킬 때
    if(!pro_on){
        pro_on = true;
    }
    // 프로그램 버튼 끌 때
    else if(pro_on){
        pro_on = false;
        if(kfb_on){
            kfb_Button.click();
        }
        if(sfb_on){
            sfb_Button.click();
        }
    }
}


function kfb_ButtonClick(){

    if(kfb_on){
        kfb_on = false;
    }
    else if(!kfb_on){
        kfb_on = true;
    }
    if(!pro_on){
        program_Button.click();
    }
}


function sfb_ButtonClick(){
    
    if(sfb_on){
        sfb_on = false;
    }
    else if(!sfb_on){
        sfb_on = true;
    }
    if(!pro_on){
        program_Button.click();
    }
}

filter_Button.addEventListener("click", filter_ButtonClick);
keyword_Button.addEventListener("click", keyword_ButtonClick);
program_Button.addEventListener("click", program_ButtonClick);
kfb_Button.addEventListener("click", kfb_ButtonClick);
sfb_Button.addEventListener("click", sfb_ButtonClick);


filter_Button.click();