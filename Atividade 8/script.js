let num1 = document.querySelector('#num1');
let btsend = document.querySelector('#btsend');
let resposta = document.querySelector('#resp');

function verificar(){
    let nr1 = Number(num1.value);
    let resp;

    if(nr1 === 1){
        resp = '001 - Parafuso';
    }else if(nr1 === 2){
        resp = '002 - Porca';
    }else if(nr1 === 3){
        resp = '003 - Prego';
    }else{
        resp = 'Diversos'
    }

    resposta.textContent = resp;
}

btsend.onclick = function(){
    verificar();
}