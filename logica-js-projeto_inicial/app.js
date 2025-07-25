alert ('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt ('Digite um número entre 0 e 10:');

if (chute == numeroSecreto) {
    console.log (`Parabéns, você acertou! O número secreto é ${numeroSecreto}`);
}
else(
    alert ('Que pena, você errou! Tente novamente!')
)


alert ('Fim do jogo! Obrigado por jogar.');
alert ('Recarregue a página para jogar novamente!')