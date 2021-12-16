document.querySelector("#adicionar").addEventListener("click",adicionar);
document.querySelector("button").addEventListener("click", remover);

var cont = 0;

if(!localStorage.getItem("nomes")){
    nomes = ["Maria", "Leonardo"];
    idades = ["35", "20"];
    localStorage.setItem("nomes", JSON.stringify(nomes));
    localStorage.setItem("idades", JSON.stringify(idades));
}else{
    nomes = JSON.parse(localStorage.getItem("nomes"));
    idades = JSON.parse(localStorage.getItem("idades"));
}

iniciarTabela(nomes,idades);

function adicionar(event){
    event.preventDefault();
  
    var form = document.querySelector("#form-adiciona");
    nome = form.nome.value;
    idade = form.idade.value;
    nomes = JSON.parse(localStorage.getItem("nomes"));
    idades = JSON.parse(localStorage.getItem("idades"));
    nomes.push(nome);
    idades.push(idade);
    localStorage.setItem("nomes", JSON.stringify(nomes));
    localStorage.setItem("idades", JSON.stringify(idades));

    criarLinha(nome, idade);
    form.reset();
}

document.querySelector("tbody").addEventListener("mouseover",mudarCor);

function mudarCor(event){
    var evento = event.target.parentNode.classList;
    evento.toggle("cor");
}

function iniciarTabela(nomes, idades){
    for(i = 0; i < nomes.length; i++){
        criarLinha(nomes[i], idades[i]);
    }

}

function criarLinha(formNome, formIdade){
    var linha = document.createElement("tr");
    var nome = document.createElement("td");
    var idade = document.createElement("td");
    nome.textContent = formNome;
    idade.textContent = formIdade;


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

function remover(event){
    console.log(event);
    event.target.parentNode.remove();
}