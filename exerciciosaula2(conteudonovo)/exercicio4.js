let numeros = [1,2,3,4,5,6,7,8];

function impar(numero){
    return(numero % 2 == 1);
}

let numerosImpar = numero.filter(impar);

console.log(numerosImpar);
