alert("Toddys é lindo");
var a = 10;
console.log("Hello, World!" + a);
console.log("valor de a é: " + a);

//exercicio 1
for(var i=150;i<=300;i++){
    console.log(i);
}

//exercicio 2
var soma = 0;
for(var j=1;j<=1000;j++){
    soma += j; // soma = soma + i;
    console.log(" " + soma);
}

//exercicio 3
for(var k=1;k<=100;k++){
    if(k%3 === 0){
        console.log(k +" é multiplo de tres");
    }
}

//exercicio 4
var fat = 1;
for(var l=1;l<=10;l++){
    fat *= l;
    console.log(fat + " ");
}

//exercicio 5
var fib0 = 0;
var fib1 = 1;
while(fib0 < 1000){
    console.log(fib0);
    var aux = fib0;
    fib0 = fib1;
    fib1 += aux;
}
