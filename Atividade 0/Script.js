let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let btsoma = document.querySelector('#btSoma');
let resposta = document.querySelector('#resp')

function somar(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let resp = nr1 + nr2;
    resposta.textContent = resp;
}

btSoma.onclick = function(){
    somar();
}