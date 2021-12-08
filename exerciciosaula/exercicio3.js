document.querySelector("#soma").addEventListener("click", somar);

function somar(){
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let resultado = parseInt(num1) + parseInt(num2);
    document.querySelector("#resultado").innerHTML = resultado;
}