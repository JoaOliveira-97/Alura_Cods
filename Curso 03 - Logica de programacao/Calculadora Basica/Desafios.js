let repetir = true;

while (repetir == true) {
    let operador = prompt("Digite: \n(+) para somar \n(-) para subtração \n(/) para divisão \n(*) para multiplicação");
    let n1 = parseFloat(prompt("Digite o primeiro numero:").replace(',', '.')); // garante que se colocar decimal com "," nao vai errar
    let n2 = parseFloat(prompt("Digite o segundo numero:").replace(',', '.')); // garante que se colocar decimal com "," nao vai errar

    if (operador == "+"){
        soma(n1, n2, operador);
    } else if (operador == "-"){
        subtração(n1, n2, operador);
    } else if (operador == "*"){
        multiplicação(n1, n2, operador);
    } else if (operador == "/"){
        divisão(n1, n2, operador);
    } else { 
        alert("Operador inválido."); 
    }
    repetir = confirm("Deseja fazer outro calculo?");
}
function soma(n1, n2, op) {
    let resultado = n1 + n2;
    alert(`${n1} ${op} ${n2} = ${resultado.toFixed(2)}`);
}
function subtração(n1, n2, op) {
    let resultado = n1 - n2;
    alert(`${n1} ${op} ${n2} = ${resultado.toFixed(2)}`);
}
function divisão(n1, n2, op) {
    if (n2 != 0) {
        let resultado = n1 / n2;
        alert(`${n1} ${op} ${n2} = ${resultado.toFixed(2)}`);
    } else {
        alert("Erro! Divisão por zero");
    }
}
function multiplicação(n1, n2, op) {
    let resultado = n1 * n2;
    alert(`${n1} ${op} ${n2} = ${resultado.toFixed(2)}`);
}