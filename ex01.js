let nums = [];// Variável que armazenará o vetor 


//Loopind para a mensagem aparecer 10 vezes seguidas para o usuário
for (let i = 0; i < 10; i++) {
    
    //Pedindo para o usuário digitar os números que ficaram salvos no vetor 
    nums [i] = parseInt(prompt(`Digite o ${i + 1}° número:`));

}

let soma = 0;// Variável feita para armazenar a soma dos números pares que estão dentro do vetor

for (let i = 0; i < 10; i++) {
    
   
    //verificará quais números digitados no vetor são par 
    if (nums[i] % 2 == 0){
        
        soma += nums[i];//Comanto que fará a soma dos números pares 
        
    }

}

//Mandará uma mensagem para o usuário informando o soma dos números pares digitados dentro do vetor 
alert(`A soma dos números pares é ${soma}!`);









