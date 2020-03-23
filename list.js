const KInput = document.querySelector("list_text"),
    KLB = KInput.querySelector("keywordlist_box"),
    kIL = document.querySelector("inlist");

const KEYWORDS_LS = "Keywords";

let Keywords = [];

function deleteKeyword(event){
    const btn = event.target;
    const li = btn.parentNode;
    KTL.removeChild(li);
    const CleanKeyword = Keywords.filter(function(keyword) {
        return keyword.id !== parseInt(li.id);
    });
    keywords = CleanKeyword;
    saveKeywords();
}

function saveKeywords(){
    localStorage.setItem(KEYWORDS_LS, JSON.stringify(Keywords));
}

function paintKeyword(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = Keywords.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteKeyword); // 클릭하면 deleteKeyword이벤트 발생
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    kIL.appendChild(li);
    const KeywordObj = {
        text: text,
        id: newId
    };
    keywords.push(KeywordObj);
    saveKeywords();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = KInput.value;
    paintKeyword(currentValue);
    KInput.value="";
}

function loadKeywords(){
    const loadedKeywords = localStorage.getItem(KEYWORDS_LS);
    if(loadedKeywords !== null){
        const parseKeywords = JSON.parse(loadedKeywords);
        parseKeywords.forEach(function(keyword) {
            paintKeyword(keyword.text);
        });
    }
}

function init(){
    loadKeywords();
    KInput.addEventListener("submit", handleSubmit);
}

init();