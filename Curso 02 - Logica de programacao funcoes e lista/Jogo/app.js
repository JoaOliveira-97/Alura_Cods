function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function telaInicial() {
    exibirTextoNaTela('h1' , 'Número Secreto!');
    exibirTextoNaTela('p' , `Escolha um numero entre 1 e ${numeroMaximo} e tente acertar.`);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosPassados.length;
    if (quantidadeDeNumerosSorteados == numeroMaximo){
        listaDeNumerosPassados = [];
    }
    if (listaDeNumerosPassados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosPassados.push(numeroEscolhido);
        console.log(listaDeNumerosPassados);
        return numeroEscolhido;
    }
    //return usado para que o numero aleatorio seja dado como resultado da funcao
};

function verificarChute() {
    let chute = document.querySelector('input').value; //.value para pegar apenas o valor inserido e nao todo o espaço input
    console.log(chute == numeroAleatorio);
    tentativas++;
    if (chute == numeroAleatorio) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let textoDeVitoria = `Joga na Megacena que fica rico. Mas foram ${tentativas} ${palavraTentativas} xP`
        exibirTextoNaTela('h1', 'Acertou demais, Brabo!');
        exibirTextoNaTela('p' , textoDeVitoria);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p' , 'Tenta um numero menor que vai.');
        } else {
            exibirTextoNaTela('p' , 'Tenta um numero maior que vai.');
    }
        exibirTextoNaTela('h1', 'Foi quase! Ou não...');   
        limparCampo();
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 0;
    limparCampo();
    telaInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}

let listaDeNumerosPassados = [];
let numeroMaximo = 4;
let tentativas = 0;
let numeroAleatorio = gerarNumeroAleatorio();
telaInicial();