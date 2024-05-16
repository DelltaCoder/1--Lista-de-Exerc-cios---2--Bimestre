let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let btmaior = document.querySelector('#btmaior');
let resposta = document.querySelector('#resp');

function MaiorQue(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let resp;
    
    if(nr1 > nr2){
        resp = nr1;
    } else if(nr2 > nr1){
        resp = nr2;
    } else {
        resp = "Numeros iguais!";
    }
    
    resposta.textContent = resp;
}

btmaior.onclick = function(){
    MaiorQue();
}