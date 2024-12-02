alert('Boas vindas ao Jogo do Número Secreto!');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1); 
//gera numero entre 1 e 10 usando *100+1
//o math.random so gera numero entre 0 e 1, mas nunca 1
console.log(numeroSecreto);
let chute;
let contador = 0;

// enquanto o chute nao for igual numero secreto, repete - operador de diferente !=
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    contador += 1
    // contador++ tambem poderia ser utilizado por ser mais compacto
       
    // se o chute for igual ao numero secreto
    if (numeroSecreto == chute){
        break; //fizemos isso para o aletr ficar fora e condicionarmos o plural, evitando if dentro de if
           } else { 
        if (numeroSecreto > chute){
            alert(`O numero secreto é maior que ${chute}`);
        }else{
            alert(`O numero secreto é menor que ${chute}`);
        }
    };
}

// forma maior para palavra tentativa no plural ou singular
if (contador <= 1){
    console.log(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} em ${contador} tentativa`);
    //usando a crase e sifrao para juntar texto com variavel (concatenacao)
    alert('Isso ai! Você descobriu o numero secreto ' + numeroSecreto + ' em ' + contador + ' tentativa');
    //usando + variavel + para fazer a juncao de texto e variavel
}else{
    console.log(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} em ${contador} tentativas`);
    //usando a crase e sifrao para juntar texto com variavel (concatenacao)
    alert('Isso ai! Você descobriu o numero secreto ' + numeroSecreto + ' em ' + contador + ' tentativas');
    //usando + variavel + para fazer a juncao de texto e variavel
}

// forma mais compacta para palavra no plural ou singular - usando operador ternario

let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} em ${contador} ${palavraTentativa}`);