//Criar uma função que exibe "Olá, mundo!" no console.
console.log('Olá mundo!');

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function hello(nome) {
    console.log(`Olá, ${nome}!`);
}

nome = prompt('Qual seu nome?');
hello(nome);


//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(num) {
    return num*2; 
}

num = parseFloat(prompt('Digite um número:'));
console.log(`O dobro deste número é, ${dobroNumero(num)}`);



//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(num1, num2, num3){
    return (num2 + num3 + num1) / 3;
}

num1 = parseFloat(prompt('Digite o primeiro número:'));
num2 = parseFloat(prompt('Digite o segundo número:'));    
num3 = parseFloat(prompt('Digite o terceiro número:'));

console.log(`A média dos 3 números é: ${media(num1, num2, num3)}`);


//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function verificarMaior(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;    
    }    
}

num1 = parseFloat(prompt('Digite o primeiro número:'));
num2 = parseFloat(prompt('Digite o segundo número:'));
console.log(`O maior número é: ${verificarMaior(num1, num2)}`);


//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadradoNumero(num) {
    return num * num;
}   
num = parseFloat(prompt('Digite um número:'));
console.log(`O quadrado deste número é: ${quadradoNumero(num)}`);
