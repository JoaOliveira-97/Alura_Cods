let contadorDeAluguel = 1;

function alterarStatus(idBotao){
    let gameClicado = document.getElementById(`game-${idBotao}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let texto = gameClicado.querySelector(".dashboard__item__name");
    let acao;

    if(imagem.classList.contains("dashboard__item__img--rented")){
        acao = "a devolução";
        if (confirm(`Voce confirma ${acao} do jogo ${texto.textContent}?`)){
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        imagem.classList.remove("dashboard__item__img--rented");
        }
    } else {
        acao = "o alugel";
        if (confirm(`Voce confirma ${acao} do jogo ${texto.textContent}?`)){
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
        contadorDeAluguel++;
        }
    }
    alert(`Realizado ${acao} do jogo ${texto.textContent}`);
    console.log(`Total de aluguel: ${contadorDeAluguel}`);
}