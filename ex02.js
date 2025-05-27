
let numReal = [];// Vetor que armazenará os 8 números digitados pelo usuário
let soma = 0;// Variável que armazenará a soma dos 8 números digitados 
const quantidade = 8;//Quantidade que o usuário precisará digitar os números 

for (let i = 0; i < quantidade; i++) {
    
    numReal[i] = (parseFloat(prompt(`Digite o número`)));//Fará a mensagem aparecer para o usuário e armazenará os números dentro do vetor 
    soma += numReal[i];//Soma dos números digitados 
}

let media = soma/quantidade;//Variável que fará a conta e armazenará a média dos números digitados 
let acimaMed = [];// Vetor que armazenará os números que estão acima da média 
let j = 0;

for (let i = 0; i < quantidade; i++) {
    
    //Se o números digitados for maior que a media, ele entrará no vetor "acimaMed"
    if( numReal[i] > media){

        acimaMed[j] = numReal[i];
        j++;

    }
}

//Mensagem que irformará os números que estão acima da média
alert(`Os valores maiores que a media são: ${acimaMed}`);



