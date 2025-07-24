alert('Bem vindo ao nosso Site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert ('Erro! Preencha todos os campos');

mensagemDeErro = 'Erro! Preencha todos os campos';

alert (mensagemDeErro);

nome =  prompt ('Informe seu nome: ');
idade =  prompt ('Informe sua idade: ');

if (idade >= 18){
    alert(`Boa! Você já pode tirar habilitação, ${nome}`);
}
else{
    alert(`Hum.. Precisa esperar um pouco mais para tirar habilitação, ${nome}`);
}