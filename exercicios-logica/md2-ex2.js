
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!
let diaSemana = prompt('Qual o dia da semana?')
diaSemana = diaSemana.toLowerCase();
console.log(diaSemana);

if (diaSemana === 'sábado' || diaSemana === 'sabado' || diaSemana === 'domingo') {
    alert('Bom fim de semana!');
}else {
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let ConsultaNumero = prompt('Digite um número:');

if (!isNaN(ConsultaNumero)) {
    if (ConsultaNumero >= 0) {
        alert(`O número ${ConsultaNumero} é positivo.`);
    } else {
        alert(`O número ${ConsultaNumero} é negativo.`);
    }
} 
else {
    alert('São validos apenas números.');
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt('Digite sua pontuação:');
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
}   
else {
    alert('Tente novamente para ganhar.');
}


//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 150.75;
alert(`Seu saldo atual é R$ ${saldo.toFixed(2)}`);
console.log(typeof saldo);


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt('Qual é o seu nome?');
alert(`Bem-vindo(a), ${nomeUsuario}!`);