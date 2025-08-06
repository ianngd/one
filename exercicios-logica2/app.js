// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc (altura,peso) {
    return peso / (altura * altura);
}

altura = parseFloat(prompt('Digite sua altura em metros:'));
peso = parseFloat(prompt('Digite seu peso em quilogramas:'));

console.log(`Seu IMC é: ${imc(altura, peso).toFixed(2)}`);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(num) {
    if (num === 0 || num === 1) {  
        return 1;   
    }
    else {
        while (num > 1) {
            return num * fatorial(num - 1);
        }
    }
}

num = parseInt(prompt('Digite um número para calcular o fatorial:'));
console.log(`O fatorial de ${num} é: ${fatorial(num)}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converteDolar(valorEmDolar) {
    const cotacaoDolar = 4.80;
    return valorEmDolar * cotacaoDolar;
} 

valorEmDolar = parseFloat(prompt('Digite o valor em dólar:'));
console.log(`O valor em reais é: R$${converteDolar(valorEmDolar).toFixed(2)}`);


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function salaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`Área da sala: ${area} m²`);
    console.log(`Perímetro da sala: ${perimetro} m`);
}

altura = parseFloat(prompt('Digite a altura da sala em metros:'));
largura = parseFloat(prompt('Digite a largura da sala em metros:'));
salaRetangular(altura, largura);


//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function salaCircular(raio) {
    const pi = 3.14; 
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;    
    console.log(`Área da sala: ${area.toFixed(2)} m²`);
    console.log(`Perímetro da sala: ${perimetro.toFixed(2)} m`);
}   

raio = parseFloat(prompt('Digite o raio da sala em metros:'));
salaCircular(raio); 

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}   