function adicionar(){
    // pegar a quantidade de itens:
    let quantidade = parseInt(document.getElementById("quantidade").value);
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert("Verificar quantidade inserida.");
        return;
    };

    // verifica o item selecionado:
    let itemSelecionado = document.querySelector("select"); // selecionando o trecho select
    let opcao = itemSelecionado.children[itemSelecionado.selectedIndex]; // coleta a opcao selecionada
    let item = opcao.textContent; // coletando o texto da opcao selecionada

    // foi feito assim para casos onde nao tem id no elemento, caso tivesse id, poderia ser feito da seguinte forma:
        // let item = document.getElementById("produto").value; // Retorna: value="Fone de ouvido - R$100"
    // pode ser pego o nome do item com a funcao split, da seguinte forma:
        // let itenFinal = item.split("-")[0]
            // a funcao esta quebrando o texto no caractere "-" sendo o 0 o que vem antes e 1 seria para pegar o que vem depois
            // itemFinal ficara com "Fone de ouvido"
        // let precoDaOpcao = item.split("R$")[1]
            // essa funcao pegara o que tiver depois dos caracteres "R$" no string do item

    let precoDaOpcao;
    let valorAdicionado;
    let itemFinal;

    // coleta o valor do item selecionado: 
    if (opcao.value == "Fone de ouvido - R$100"){
        precoDaOpcao = 100;
        itemFinal = "Fone de Ouvido";
    } else if (opcao.value == "Celular - R$1400"){
        precoDaOpcao = 1400;
        itemFinal = "Celular";
    } else if (opcao.value == "Oculus VR - R$5000") {
        precoDaOpcao = 5000;
        itemFinal = ("Oculus VR")
    }

    // calculo do valor final:
    valorAdicionado = precoDaOpcao * quantidade;
    valorTotal = valorTotal + valorAdicionado;
    
    // adicionar ao carrinho e valor total
    document.getElementById("lista-produtos").innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade} x</span> ${itemFinal}: <span class="texto-azul">R$${valorAdicionado}</span></section>`
    document.getElementById("valor-total").innerHTML = `R$${valorTotal.toFixed(2)}`;

    // zerar a quantidaed para a proxima interacao:
    document.getElementById('quantidade').value = "";
}

function limpar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('valor-total').innerHTML = "R$ 0,00";
    document.getElementById("lista-produtos").innerHTML = "";
    valorTotal = 0;
}

let valorTotal = 0;