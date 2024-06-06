var increasBtn = document.querySelector(".incFont");
var orginalBtn = document.querySelector(".originalFont");
var div = document.querySelector("div");
function increes(){
    div.classList.add("inc");
}
function originalsize(){
    div.classList.remove("inc");
}


increasBtn.onclick = increes;
orginalBtn.onclick = originalsize;