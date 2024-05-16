let num1 = document.querySelector('#num1');
let btparimpar = document.querySelector('#btparimpar');
let resposta = document.querySelector('#resp');

function imparoupar(){
    let nr1 = Number(num1.value);
    let respo = (nr1 % 2);
    let resp;

    if(respo === 1){
        resp = 'Impar!';
    }else{
        resp = 'Par!';
    }

    resposta.textContent = resp;
}

btparimpar.onclick = function(){
    imparoupar();
}