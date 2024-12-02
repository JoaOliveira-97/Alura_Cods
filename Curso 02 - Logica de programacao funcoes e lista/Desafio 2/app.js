function olaMundo() {
    console.log("Olá mundo");
}
olaMundo();

function saudacao(nome) {
   console.log(`Que legal! Seja bem vindo ${nome}.`);
}
saudacao("Joao");

function dobro(numero) {
    return numero * 2;
}
let numeroDobrado = dobro(4);
console.log(numeroDobrado);

function mediaDeTres(n1 , n2 , n3) {
    return (n1 + n2 + n3) / 3;
}
let mediaResultante = mediaDeTres(6 , 4 , 8);
console.log(mediaResultante);

function maior(n1 , n2) {
    if (n1 > n2){
        return n1;
    } else { return n2; }
}
let maiorNumero = maior(1 , 2);
console.log(maiorNumero);

function multiplicador(n1) {
    return n1*n1
}
let multiplicado = multiplicador(4);
console.log(multiplicado);