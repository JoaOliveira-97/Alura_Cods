let contador = 1;
while (contador < 10){
    console.log(contador);
    contador++;
};

while (contador >= 0){
    console.log(contador);
    contador--;
};

let numeroRegressivo = prompt("Digita aqui um numero para contagem regressiva:");
while (numeroRegressivo >= 0){
    console.log(numeroRegressivo);
    numeroRegressivo--;
}

let numeroProgressivo = prompt("Digita aqui um numero para contarmos até ele:");
contador = 0;
while (contador <= numeroProgressivo){
    console.log(contador);
    contador++;
}

let numeroTeste = prompt("Digita aqui um numero:");
if (numeroTeste>0){
    alert(`O numero ${numeroTeste} é positivo`);
}else{ 
    if(numeroTeste == 0){
        alert(`O numero ${numeroTeste} é zero`);
    }else{ 
        alert(`O numero ${numeroTeste} é negativo`);
    }
}