let numerosInteiros = [];//Vetor que armazerá os números inteiros digitado pelo usuário
let quantidade = 10;//Quantidade de vezes que pedirá um novo número  para o usuário

for (let i = 0; i < quantidade; i++) {

    //Mensagem que pede os 10 números inteiros
    numerosInteiros[i] = (parseInt(prompt(`Digite o ${i + 1}° número inteiro!`)));

}

let num = 0;//Variável que armazenará o número que o usuário quer descobrir quantas vezes aparece no vetor
let k = 0;

//Comando que fará a mensagem que pede o número para descobrir quantas vezes ele aparece no vetor
num = (parseInt(prompt(`Digite um número para descobrirmos quantas vezes ele aparece no vetor.`)));

for (let i = 0; i < quantidade; i++) {

    //Código que combara os números inteiro com o número que o usuário deseja descobrir se está dentro do vetor 
    if (numerosInteiros[i] == num) {      
        k++;
    }

}

//Mensagem que informará quantas vezes o certo número aparecere no vetor
alert(`Foram encontradas ${k} ocorrências do número ${num}.`);
