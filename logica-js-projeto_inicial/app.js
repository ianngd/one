alert ('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
let chute = prompt ('Digite um número entre 0 e 10:');

if (chute == numeroSecreto) {
    console.log ('Parabéns, você acertou!');
}
else(
    console.log ('Que pena, você errou! O número era ' + numeroSecreto)
)