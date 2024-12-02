let diaSemana = prompt("Qual dia da semana é hoje?");

if (diaSemana == "Sabado" || diaSemana == "Domingo"){
    alert("Bom final de semana!");
}else{
    alert("Boa semana!");
};

let numero = prompt("Digite aqui um numero:");
if (numero >= 0){
    alert(`O número ${numero} é positivo`);
}else{
    alert(`O número ${numero} é negativo`);
};

let pontos = prompt("Quantos pontos você ja fez?");
if (pontos >= 100){
    alert("Você venceu, Parabens!");
}else{
    alert("Tente novamente para ganhar. :(");
};

let saldoEmConta = prompt("Qual o seu saldo na conta?");
alert(`Seu saldo então é de R$ ${saldoEmConta}`);

let nome = prompt("Qual o seu nome?");
alert(`Boas vinda, fela da gaita ${nome}`);