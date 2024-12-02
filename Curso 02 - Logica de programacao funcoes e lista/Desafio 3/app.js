function IMC(peso , altura) {
    return (peso/100 / ((altura/100) ** 2));
}

//let peso = parseInt(prompt("Qual o seu peso? Pode colocar sem virgulas:"));
//let altura = parseInt(prompt("Agora me diz a sua altura, sem virgulas:"));
//alert(`O seu IMC é de ${IMC(peso , altura)}`);

function fatorial(numeroInserido) {
    let resultado = numeroInserido;
    if (numeroInserido == 0){
        return 1;
    } else { 
        for(let i = numeroInserido - 1; i >= 1; i--){
            resultado *= i;
            console.log(i , resultado);
        }
        return resultado;
    }
}
let numeroFatorial = parseInt(prompt("Qual o numero para o fatorial?"));
alert(`O fatorial de ${numeroFatorial} é ${fatorial(numeroFatorial)}`);

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`);
    }
}
let numeroTabuada = parseInt(prompt("Qual o numero para a tabuada?"));
tabuada(numeroTabuada);