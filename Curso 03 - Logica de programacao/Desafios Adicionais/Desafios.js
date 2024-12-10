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

//conversorTemperatura();
//parOuImpar();
//separarNumeros();
//verificarPalindromo();
//ordenarNumeros();

// DESAFIOS PENDENTES:
//Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.
//Remova o último elemento de novaLista. Imprima novaLista após a remoção.
//Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.
//Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.
//Implemente uma função que verifique se uma pessoa é maior de idade.
//Desenvolva uma função que valide se uma string é vazia ou não.
//Crie uma função que determine se um ano é bissexto
//Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
//Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
//Crie um array e utilize a função includes para verificar se um elemento específico está presente
//Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
//Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
//Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.
//Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.