document.querySelector("#adicionar").addEventListener("click", adicionar);

function adicionar(event){
    event.prevenDefault();

    let form = document.querySelector("#form-adiciona");
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