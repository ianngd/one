alert ('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt ('Digite um número entre 1 e 10:'); 

    if (chute == numeroSecreto) {
        alert (`Parabéns! O número secreto é ${numeroSecreto}. Você descobriu com ${tentativas} tentativas.`);
    } else{
        tentativas++;
        if (chute < numeroSecreto) {
            alert (`O número secreto é maior que ${chute}!`);
        } else {
            alert (`O número secreto é menor que ${chute}!`);
        }    
    }
}

alert ('Fim do jogo! Obrigado por jogar.');
alert ('Recarregue a página para jogar novamente!');