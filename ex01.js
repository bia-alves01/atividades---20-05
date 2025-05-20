let nums = [];


for (let i = 0; i < 10; i++) {
    
    nums [i] = parseInt(prompt(`Digite o ${i + 1}° número:`));

}

let numPar = 0;
let soma = 0;

for (let i = 0; i < 10; i++) {
    
    if (nums[i] % 2 == 0) {
        
        soma += nums[i];
        
    }

}
alert(`A soma dos números pares é ${soma}!`);









