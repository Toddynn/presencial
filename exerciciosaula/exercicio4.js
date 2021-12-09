document.querySelector("#adicionar").addEventListener("click", adicionar);
document.querySelector("tbody").addEventListener("mouseover", mudarCor);

function mudarCor(event){
    var evento = event.target.parentNode;
    console.log(evento);

    evento.classList.toggle("cor");
}
function adicionar(event){
    event.preventDefault();

    let form = document.querySelector("#form-adicionar");
    let nome = form.nome.value;
    let idade = form.idade.value;

    let linha = document.createElement("tr");
    let celulaNome = document.createElement('td');
    let celulaIdade = document.createElement('td');

    celulaNome.textContent = nome;
    celulaIdade.textContent = idade;

    linha.appendChild(celulaNome);
    linha.appendChild(celulaIdade);
    document.querySelector("tbody").appendChild(linha);
}