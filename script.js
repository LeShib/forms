// Variables
const inputFn = document.getElementById("firstname");
const spanFn = document.getElementById("display-firstname");
const inputAge = document.getElementById("age");
const hardTruthSec = document.getElementById("a-hard-truth");
const inputPw = document.getElementById("pwd");
const inputPwConfirm = document.getElementById("pwd-confirm");
const select = document.getElementById("toggle-darkmode");
const body = document.querySelector("body");
const divs = document.querySelectorAll("div");
const spanPw = document.createElement("span");
const spanPwConfirm = document.createElement("span");


// Fonctions
function displayText(){
    spanFn.innerHTML = inputFn.value;
}

function isMajor(){
    if(inputAge.value >= 18){
        hardTruthSec.style.visibility = "visible";
    } else {
        hardTruthSec.style.visibility = "hidden";
    }
}

function validation(){
    if(inputPw.value.length < 6 && inputPw.value != inputPwConfirm.value){
        inputPw.style.border = "1px solid red";
        inputPwConfirm.style.border = "1px solid red";
        inputPw.style.backgroundColor = "red";
        inputPwConfirm.style.backgroundColor = "red";
        spanPw.innerHTML = "incorrect password (must contain min 6 characters)";
        spanPwConfirm.innerHTML = "incorrect password (the value does not match the first value)";
    }else if(inputPw.value.length < 6){
        inputPw.style.border = "1px solid red";
        inputPw.style.backgroundColor = "red";
        spanPw.innerHTML = "incorrect password (must contain min 6 characters)";
        spanPwConfirm.innerHTML = "";
    }else if(inputPw.value != inputPwConfirm.value){
        inputPwConfirm.style.border = "1px solid red";
        inputPwConfirm.style.backgroundColor = "red";
        spanPw.innerHTML = "";
        spanPwConfirm.innerHTML = "incorrect password (the value does not match the first value)";
    }else{
        inputPw.style.border = "1px solid green";
        inputPwConfirm.style.border = "1px solid green";
        inputPw.style.backgroundColor = "white";
        inputPwConfirm.style.backgroundColor = "white";
        spanPw.innerHTML = "";
        spanPwConfirm.innerHTML = "";
    }
    divs[0].appendChild(spanPw);
    divs[1].appendChild(spanPwConfirm);
}

function darkMode(){
    if (select.value === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

// Event
inputFn.addEventListener("keyup", displayText);
inputAge.addEventListener("keyup", isMajor);
inputPw.addEventListener("keyup", validation);
inputPwConfirm.addEventListener("keyup", validation);
select.addEventListener("change", darkMode);