// versao com o Desafio 1 - clicar no nome para excluir o amigo:

function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    if (amigo.value == ""){
        alert("Insira um nome :D");
    } else if (amigos.includes(amigo.value)){
        alert("Nome repetido, coloque algo para diferenciar :D");
    } else if (lista.textContent = "") {
        lista.textContent = amigo.value;
        amigos.push(amigo.value);
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
        amigos.push(amigo.value);
    }

    document.getElementById("nome-amigo").value = "";
    amigo.value = "";

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    if (amigos.length < 4) {
        alert("Não há amigos suficientes para o sorteio, adicione pelo menos 4.");
        return;
    }
    document.getElementById("lista-sorteio").innerHTML = "";

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigos.length; i++){
        if (i !== amigos.length - 1){
            sorteio.innerHTML += `${amigos[i]} tirou ${amigos[i+1]}<br/>`;
        } else {
            sorteio.innerHTML += `${amigos[i]} tirou ${amigos[0]}<br/>`;
        }
    }
}

// metodo fisher-yates
function embaralha(lista) {
    let indice = lista.length
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function reiniciar(){
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    amigos = [];
    contador = 0;
}

function excluirAmigo(index){
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio(){
    let sorteio = document.getElementById("lista-sorteio");
    sorteio.innerHTML = "";
}   

function atualizarLista(){
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement("p");
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener("click", function() {
            excluirAmigo(i);
        });
        
        lista.appendChild(paragrafo);
    }
}

let amigos = [];