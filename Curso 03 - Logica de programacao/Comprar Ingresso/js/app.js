let pistaTotal = parseInt(document.getElementById("qtd-pista").textContent);
let cadeiraSuperiorTotal = parseInt(document.getElementById("qtd-superior").textContent);
let cadeiraInferiorTotal = parseInt(document.getElementById("qtd-inferior").textContent);

function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
    if (verificarValorInserido(quantidade) == 1) {
        if (tipoIngresso == "inferior"){
            verificarIngresso("Cadeira Inferior" , cadeiraInferiorTotal , "qtd-inferior", quantidade);
        } else if (tipoIngresso == "superior"){
            verificarIngresso("Cadeira Superior" , cadeiraSuperiorTotal , "qtd-superior", quantidade);
        } else if (tipoIngresso == "pista"){
            verificarIngresso("Pista" , pistaTotal , "qtd-pista", quantidade);
        }
    }
}

function verificarValorInserido(valor) {
    if (valor <= 0 || isNaN(valor)) {
        document.getElementById("qtd").value = "";
        alert("Erro: Confira a quantidade inserida!");
        return 0;
    } else {
        return 1;
    }
}

function verificarIngresso(tipo, totalDisponivel, id, qnt){
    if(totalDisponivel >= qnt){
        if(confirm(`Confirma a compra de ${qnt} ingresso(s) do tipo ${tipo}?`)){
            alert("Compra realizada com sucesso");
            if (tipo == "Cadeira Inferior") {
                cadeiraInferiorTotal -= qnt;
                document.getElementById(id).textContent = cadeiraInferiorTotal;
            } else if (tipo == "Cadeira Superior") {
                cadeiraSuperiorTotal -= qnt;
                document.getElementById(id).textContent = cadeiraSuperiorTotal;
            } else if (tipo == "Pista") {
                pistaTotal -= qnt;
                document.getElementById(id).textContent = pistaTotal;
            }
        }
    } else {
        alert(`Não foi possivel, só temos ${totalDisponivel} para esse tipo ${tipo}`);
        document.getElementById("qtd").value = totalDisponivel;
    }
}