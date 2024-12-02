let titulo = document.querySelector( "h1");
titulo.innerHTML = "Hora do Desafio P#@$%!";

function botaoClicado(){
    console.log("Voce clicou no botão, brabo d+!");
};

function alertado(){
    alert("Estou te alertando!");
};

function cidade() {
    let cidade = prompt("Qual cidade voce mais gosta?");
    alert(`A cidade ${cidade} é no maximo mais ou menos...`);
};

function soma() {
    let numero1 = parseInt(prompt("Me da um numero inteiro, sem virgula ein?!"));
    let numero2 = parseInt(prompt("Agora me da o segundo numero, sem vigula, to de olho!"));
    let resultado = (numero1+numero2);
    alert(`A soma desses dois numero é ${resultado}, uaaaau... dava para fazer de cabeça. -.-`);
};