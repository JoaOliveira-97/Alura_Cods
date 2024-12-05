let listaSorteada = [];
let numero;
let botao = document.getElementById('btn-reiniciar');

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
    // math.floor ja gera um numero aleatorio dentro dos limites estabelecidos
}

function mostrarNumeros(id , texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

// iniciar o processo com o click do botão, armazenando os dados inseridos
function sortear(tag){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    // verificar valores do intervalo
    if (de > ate){
        let temp = de;
        de = ate;
        ate = temp;
    }
    
    // sortear a quantidade de numeros solicitados
    if (ate - de + 1 < quantidade){
        alert("Inserir intervalo maior para sortear");
    } else {
        listaSorteada = [];
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de , ate);
            // verificar numero repetido
            while (listaSorteada.includes(numero)) {
                numero = obterNumeroAleatorio(de , ate);
            }
            listaSorteada.push(numero);
        }

        // mostrar os numeros sorteados
        let textoFinal = `<label class="texto__paragrafo">Números sorteados: ${listaSorteada.join(", ")}</label>`;
        mostrarNumeros("resultado" , textoFinal);

        // verifica status do botao e altera, caso necessario
        if(botao.classList.contains("container__botao-desabilitado")){
            alterarStatusBotao();
        }
    };
};

function reiniciar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    mostrarNumeros("resultado" , '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>');
    alterarStatusBotao();
};

function alterarStatusBotao(){
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    };
    // botao.classList.contains('container__botao-desabilitado')? (botao.classList.remove('container__botao-desabilitado'), botao.classList.add('container__botao')) : (botao.classList.remove('container__botao'), botao.classList.add('container__botao-desabilitado'));
    // no comentario acima a substituição é feita com o uso de operador ternário
};