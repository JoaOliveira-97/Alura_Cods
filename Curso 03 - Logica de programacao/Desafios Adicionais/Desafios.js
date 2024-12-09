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

// desafio de separar numeros de string:
function separarNumeros(){
    let d = prompt("digite numeros separados por virgula:");
    let e = d.split(",");
    for(let i = 0; i < e.length; i++) {
        console.log(e[i]);  
    }  
}

// desafio par ou impar:
function parOuImpar(){
    let f = prompt("Digite um numero:");
    if (f % 2 == 0) {
        alert(`O numero ${f} é par!`);
    } else {
        alert(`O numero ${f} é impar!`);
    }
    if (confirm("Quer ir novamente?")) {
        parOuImpar();
    }
}

// desafio de conversao de temperatura:
function conversorTemperatura(){
    let h = parseFloat(prompt("Qual temperatura quer converter?").replace(',', '.')); // garante que se entrar com virgula ou ponto sera entendido como numero decimal
    if (!isNaN(h)) {
        if (confirm("Voce quer converter de Celsius para Fahrenheit? Se clicar em cancelar faremos de Fahrenheit para Celsius.")) {
            h = ((1.8 * h) + 32)
            alert(`É ${h.toFixed(2)}F`);
        } else { 
            h = ((h - 32) / 1.8); 
            alert(`É ${h.toFixed(2)}C`);
        }
        if (confirm("Quer ir novamente?")) {
            conversorTemperatura();
        }
    } else { alert("Digite um numero válido!");conversorTemperatura();}
}

conversorTemperatura();
//parOuImpar();
//separarNumeros();
//verificarPalindromo();
//ordenarNumeros();