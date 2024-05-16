let numero1 = document.querySelector('#numero1');
let numero2 = document.querySelector('#numero2');
let numero3 = document.querySelector('#numero2');
let btsoma = document.querySelector('#btSoma');
let resposta1 = document.querySelector('#resp1');
let resposta2 = document.querySelector('#resp2');
let resposta3 = document.querySelector('#resp3');
let resposta4 = document.querySelector('#resp4');

function calcular(){
    let nr1 = Number(numero1.value);
    let nr2 = Number(numero2.value);
    let nr3 = Number(numero3.value);
    let resp1 = ((nr1 + nr2 + nr3) / 3);
    let resp2 = (((3 * nr1) + (2 * nr2) + (5 * nr3)) / (3 + 2 + 5)) ;
    let resp3 = (resp1 + resp2);
    let resp4 = ((resp1 + resp2) / 2);
    resposta1.textContent = resp1.toFixed(2);
    resposta2.textContent = resp2.toFixed(2);
    resposta3.textContent = resp3.toFixed(2);
    resposta4.textContent = resp4.toFixed(2);
}

btcalcular.onclick = function(){
    calcular();
}