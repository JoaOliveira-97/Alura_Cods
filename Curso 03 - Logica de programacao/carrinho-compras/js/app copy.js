function adicionar(){
    // pegar a quantidade de itens:
    let quantidade = parseInt(document.getElementById("quantidade").value);
    if (quantidade <= 0 || isNaN(quantidade)) {
        alert("Verificar quantidade inserida.");
        return;
    };

    // verifica o item selecionado:
    let opcao = document.getElementById("produto").value; // Retorna: value="Fone de ouvido - R$100"
    // pode ser pego o nome do item com a funcao split, da seguinte forma:
    let item = opcao.split("-")[0] // a funcao esta quebrando o texto no caractere "-" sendo o 0 o que vem antes e 1 seria para pegar o que vem depois
    let precoDaOpcao = opcao.split("R$")[1] // essa funcao pegara o que tiver depois dos caracteres "R$" no string do item

    // calculo do valor final:
    let valorAdicionado = precoDaOpcao * quantidade;
    valorTotal = valorTotal + valorAdicionado;
    
    // adicionar ao carrinho e valor total
    document.getElementById("lista-produtos").innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade} x</span> ${item}: <span class="texto-azul">R$${valorAdicionado}</span></section>`
    document.getElementById("valor-total").innerHTML = `R$${valorTotal.toFixed(2)}`;

    // zerar a quantidaed para a proxima interacao:
    document.getElementById('quantidade').value = "";
}

function limpar(){
    document.getElementById('quantidade').value = "";
    document.getElementById('valor-total').innerHTML = "R$ -";
    document.getElementById("lista-produtos").innerHTML = "";
    valorTotal = 0;
}

let valorTotal = 0;