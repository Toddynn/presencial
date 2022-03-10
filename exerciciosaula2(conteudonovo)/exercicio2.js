
let num = [4, 2, 6, 8, 10];

function CalcForEach(valor){
    let resultado = math.pow(valor, 2);
    console.log("indice" + indice,"valor" + valor,"resultado" + resultado);
}

function CalcMap(valor){
    let resultado = valor * valor;
    return resultado;
}

numeros.ForEach(CalcForEach);

let resultado = num.map(CalcMap);
console.log(resultado);