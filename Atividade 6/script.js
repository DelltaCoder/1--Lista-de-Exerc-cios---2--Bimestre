let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let btmaior = document.querySelector('#btmaior');
let resposta = document.querySelector('#resp');

function MaiorQue(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let nr3 = Number(num3.value);
    let nr4 = Number(num4.value);
    let resp;
    
    let menorValor = nr1;

    if (nr2 < menorValor) {
        menorValor = nr2;
    }
    if (nr3 < menorValor) {
        menorValor = nr3;
    }
    if (nr4 < menorValor) {
        menorValor = nr4;
    }
    
    resposta.textContent = menorValor;
}

btmaior.onclick = function(){
    MaiorQue();
}