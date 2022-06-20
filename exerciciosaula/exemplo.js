document.querySelector("#adicionar").addEventListener("click",adicionar);
document.querySelector("button").addEventListener("click", remover);

var cont = 0;

if(!localStorage.getItem("nomes")){
    nomes = ["Maria", "Leonardo"];
    idades = ["35", "20"];
    patrimonios = ["2.500", "1.000"];

    localStorage.setItem("nomes", JSON.stringify(nomes));
    localStorage.setItem("idades", JSON.stringify(idades));
    localStorage.setItem("patrimonios", JSON.stringify(patrimonios));

}else{
    nomes = JSON.parse(localStorage.getItem("nomes"));
    idades = JSON.parse(localStorage.getItem("idades"));
    patrimonios = JSON.parse(localStorage.getItem("patrimonios"));
}

iniciarTabela(nomes, idades, patrimonios);

function adicionar(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    nome = form.nome.value;
    idade = form.idade.value;
    patrimonio = form.patrimonio.value;

    nomes = JSON.parse(localStorage.getItem("nomes"));
    idades = JSON.parse(localStorage.getItem("idades"));
    patrimonios = JSON.parse(localStorage.getItem("patrimonios"));

    nomes.push(nome);
    idades.push(idade);
    patrimonios.push(patrimonio);

    localStorage.setItem("nomes", JSON.stringify(nomes));
    localStorage.setItem("idades", JSON.stringify(idades));
    localStorage.setItem("patrimonios", JSON.stringify(patrimonios));

    criarLinha(nome, idade, patrimonio);
    form.reset();
}

document.querySelector("tbody").addEventListener("mouseover",mudarCor);

function mudarCor(event){
    var evento = event.target.parentNode.classList;
    evento.toggle("cor");
}

function iniciarTabela(nomes, idades, patrimonios){
    for(i = 0; i < nomes.length; i++){
        criarLinha(nomes[i], idades[i], patrimonios[i]);
    }

}

function criarLinha(formNome, formIdade, formPatrimonio){
    var linha = document.createElement("tr");
    var nome = document.createElement("td");
    var idade = document.createElement("td");
    var patrimonio = document.createElement("td");

    nome.textContent = formNome;
    idade.textContent = formIdade;
    patrimonio.textContent = formPatrimonio;

    var botao = document.createElement("button");
    botao.addEventListener("click", remover);
    botao.textContent = "X";
    botao.id = "btn" + cont;
    cont++;

    linha.appendChild(nome);
    linha.appendChild(idade);
    linha.appendChild(patrimonio);
    linha.appendChild(botao);

    document.querySelector("tbody").appendChild(linha);
}

function remover(event){
    console.log(event);
    event.target.parentNode.remove();
}