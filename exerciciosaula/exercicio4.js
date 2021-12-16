document.querySelector("#adicionar").addEventListener("click", adicionar);
document.querySelector("tbody").addEventListener("mouseover", mudarCor);
//document.querySelector("btn").addEventListener("click", remover);

var cont = 0;

if(localStorage.length > 0){
    let nome = JSON.parse(localStorage.getItem('nome'));
    let idade = JSON.parse(localStorage.getItem('idade'));

    for(let i = 0; i < nome.length; i++)
        criarLinha(nome[i], idade[i]);
}else{
    let nomes = ['vinicius', 'plinio'];
    let idades = ['17', '20'];


    localStorage.setItem('nome', JSON.stringify(nomes));
    localStorage.setItem('idade', JSON.stringify(idades));
}
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

    let nomes = JSON.parse(localStorage.getItem('nome'));
    let idades = JSON.parse(localStorage.getItem('idade'));

    nomes.push(nomes);
    idades.push(idades);

    localStorage.setItem('nome', JSON.stringify(nomes));
    localStorage.setItem('idade', JSON.stringify(idades));
    
    criarLinha(nome, idade);
}
function remover(event){
    event.target.parentNode.remove();
}
function criarLinha(nome, idade){
    let linha = document.createElement("tr");
    let celulaNome = document.createElement("td");
    let celulaIdade = document.createElement("td");

    celulaNome.textContent = nome;
    celulaIdade.textContent = idade;
    
    var botao = document.createElement("button");
    botao.addEventListener("click", remover);
    botao.textContent = "X";
    botao.id = "btn" + cont;
    cont++;

    linha.appendChild(celulaNome);
    linha.appendChild(celulaIdade);
    linha.appendChild(botao);
    document.querySelector("tbody").appendChild(linha);
}    
