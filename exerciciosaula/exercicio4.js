document.querySelector("#adicionar").addEventListener("click", adicionar);
document.querySelector("tbody").addEventListener("mouseover", mudarCor);

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
    var evento = event.target.parentNode.classList;
    evento.toggle("cor");
}

function adicionar(event){
    event.preventDefault();

    let form = document.querySelector("#form-adicionar");
    let nome = form.nome.value;
    let idade = form.idade.value;

    let nomes = JSON.parse(localStorage.getItem("nomes"));
    let idades = JSON.parse(localStorage.getItem("idades"));

    nomes.push(nome);
    idades.push(idade);

    localStorage.setItem("nome", JSON.stringify(nomes));
    localStorage.setItem("idade", JSON.stringify(idades));
    
    criarLinha(nome, idade);
}
function remover(event){
    console.log(event);
    event.target.parentNode.remove();
}
function criarLinha(formNome, formIdade){
    var linha = document.createElement("tr");
    var celulaNome = document.createElement("td");
    var celulaIdade = document.createElement("td");

    celulaNome.textContent = formNome;
    celulaIdade.textContent = formIdade;
    
    var botao = document.createElement("button");
    botao.addEventListener("click", remover);
    botao.textContent = "X";
    botao.id = "btn" + cont;
    cont++;

    linha.appendChild(nome);
    linha.appendChild(idade);
    linha.appendChild(botao);
    document.querySelector("tbody").appendChild(linha);
}    
