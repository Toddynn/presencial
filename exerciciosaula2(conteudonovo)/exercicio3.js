let numeros = [1,2,3,4,5,6];

function converterNumParaString(numero) {
    return numero.toString();
}

let vetor = numeros.map(converterNumParaString);
console.log(vetor);