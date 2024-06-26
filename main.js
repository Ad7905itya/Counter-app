let inputValue = document.getElementById("num");
let inputChoose = document.getElementById("choose");
let i = 0;

function btnDecrease(){
    let addValue = inputChoose.innerHTML = inputChoose.value;
    i = i - addValue;
    inputValue.value = i;
}

function btnIncrease(){
    let addValue = inputChoose.innerHTML = +inputChoose.value;
    i =i + addValue;
    inputValue.value = i;
}

function btnReset(){
    i = 0;
    inputValue.value = i;
}
