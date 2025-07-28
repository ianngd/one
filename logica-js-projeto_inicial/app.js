alert ('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt ('Digite um número entre 1 e 100:'); 

    if (chute == numeroSecreto) {
        break;
    } else{
        tentativas++;
        if (chute < numeroSecreto) {
            alert (`O número secreto é maior que ${chute}!`);
        } else {
            alert (`O número secreto é menor que ${chute}!`);
        }    
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //Operador Ternário
alert (`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);

alert ('Fim do jogo! Obrigado por jogar.');
alert ('Recarregue a página para jogar novamente!');


let palavraPessoa = qantdadePessoas == 1 ? 'pessoa' : 'pessoas'; 