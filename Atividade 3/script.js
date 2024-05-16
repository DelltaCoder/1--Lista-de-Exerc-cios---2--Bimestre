let Saldo = document.querySelector('#Saldo');
let Reajuste = document.querySelector('#Reajuste');

function reajustar(){
    let saldo1 = Number(Saldo.value);
    let aumento = (saldo1 * 0.01);
    let resp = saldo1 + aumento;
    alert(resp);
}

btReajuste.onclick = function(){
    reajustar();
}