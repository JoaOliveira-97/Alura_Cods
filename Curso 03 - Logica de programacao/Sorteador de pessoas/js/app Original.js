function adicionar(){
    let nome = document.getElementById("nome-amigo").value;
    if (nome == "") {
    alert("Para rodarmos melhor, digite um nome! :D");
    } else if (contador < 1){
        contador = 1;
        document.getElementById("lista-amigos").textContent += `${nome}`;
        document.getElementById("nome-amigo").value = "";
        listaDeAmigos.push(nome);
    } else if (listaDeAmigos.includes(nome)){
        alert("Nome repetido, coloque algo para diferenciar :D");
        document.getElementById("nome-amigo").value = "";
    } else {
        listaDeAmigos.push(nome);
        document.getElementById("lista-amigos").textContent += `, ${nome}`;
        document.getElementById("nome-amigo").value = "";
    }
}

function sortear(){
    if (listaDeAmigos.length < 2) {
        alert("Não há amigos suficientes para o sorteio.");
        return;
    }
    document.getElementById("lista-sorteio").innerHTML = "";
    embaralha(listaDeAmigos);
    let sorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < listaDeAmigos.length; i++){
        if (i !== listaDeAmigos.length - 1){
            sorteio.innerHTML += `${listaDeAmigos[i]} tirou ${listaDeAmigos[i+1]}<br>`;
        } else {
            sorteio.innerHTML += `${listaDeAmigos[i]} tirou ${listaDeAmigos[0]}`;
        }
    }
}

// metodo fisher-yates
function embaralha(lista) {
    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function reiniciar(){
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    listaDeAmigos = [];
    contador = 0;
}

let listaDeAmigos = [];
let contador = 0;