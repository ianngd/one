let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1)
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p','Digite um número de 01 a 10:');


function verificarChute(){
    console.log(numeroSecreto);
}