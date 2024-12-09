// desafio de ordenar numeros:
function ordenarNumeros() {
    let a = parseInt(prompt("Digita um numero:"));
    let b = parseInt(prompt("Digita mais um numero:"));
    let c = parseInt(prompt("Digita o ultimo numero:"));

    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    alert(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// desafio do palindormo:
function verificarPalindromo(){
    var palavra = prompt("Qual palavra quer testar?");
    var letrasSeparadas = palavra.split("");
    var letrasInvertida = letrasSeparadas.reverse();
    var palavraInvertida = letrasInvertida.join("");
    if(palavra == palavraInvertida){
        alert(`A palavra "${palavra}" é um palindromo`);
    } else {
        alert(`A palavra "${palavra}" não é um palindromo`);
    }
}

verificarPalindromo();
ordenarNumeros();