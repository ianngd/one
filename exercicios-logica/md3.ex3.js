//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador <= 10) {    
    alert(contador);
    contador++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador = 10;
while (contador >=0) {    
    alert(contador);
    contador--;
}   

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
contador = parseInt(prompt('Digite um número para contagem regressiva:'));
while (contador >=0){
    alert (contador);
    contador--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
contador = parseInt(prompt('Digite um número para contagem progressiva:'));
contador_auxiliar = 0;
while(contador_auxiliar <= contador){
    alert(contador_auxiliar);
    contador_auxiliar++;
}