let listaDeNumerosSorteados = [];
quantidade = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * quantidade + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == quantidade){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //possível graças ao responsiveVoice.js disponível no html
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();    
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Digite um número de 01 a 10:');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', `Acertou! ${numeroSecreto}.`);
        let palavraTentativas = (tentativas > 1) ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'Número secreto é menor.');
        }
        else{
        exibirTextoNaTela('p', 'Número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

//variavel.length - Puxa o número de elementos de uma array ou string