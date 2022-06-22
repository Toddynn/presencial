document.querySelector("#adicionar").addEventListener("click",adicionar);
document.querySelector("button").addEventListener("click", remover);

var cont = 0;

function replaceCPF(cpf){
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

if(!localStorage.getItem("nomes")){
    nomes = [""];
    idades = [""];
    cpfs = [""];

    localStorage.setItem("nomes", JSON.stringify(nomes));
    localStorage.setItem("idades", JSON.stringify(idades));
    localStorage.setItem("cpfs", JSON.stringify(cpfs));

}else{
    nomes = JSON.parse(localStorage.getItem("nomes"));
    idades = JSON.parse(localStorage.getItem("idades"));
    cpfs = JSON.parse(localStorage.getItem("cpfs"));
}

iniciarTabela(nomes, idades, cpfs);

function adicionar(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    nome = form.nome.value;
    idade = form.idade.value;
    cpf = form.cpf.value;

    nomes = JSON.parse(localStorage.getItem("nomes"));
    idades = JSON.parse(localStorage.getItem("idades"));
    cpfs = JSON.parse(localStorage.getItem("cpfs"));

    nomes.push(nome);
    idades.push(idade);
    cpfs.push(cpf);

    localStorage.setItem("nomes", JSON.stringify(nomes));
    localStorage.setItem("idades", JSON.stringify(idades));
    localStorage.setItem("cpfs", JSON.stringify(cpfs));

    criarLinha(nome, idade, cpf);
    form.reset();
}

document.querySelector("tbody").addEventListener("mouseover",mudarCor);

function mudarCor(event){
    var evento = event.target.parentNode.classList;
    evento.toggle("cor");
}

function iniciarTabela(nomes, idades, cpfs){
    for(i = 0; i < nomes.length; i++){
        criarLinha(nomes[i], idades[i], cpfs[i]);
    }
}

function criarLinha(formNome, formIdade, formCpf){
    var linha = document.createElement("tr");
    var nome = document.createElement("td");
    var idade = document.createElement("td");
    var cpf = document.createElement("td");

    nome.textContent = formNome;
    idade.textContent = formIdade;
    cpf.textContent = formCpf;

    var botao = document.createElement("button");
    botao.addEventListener("click", remover);
    botao.textContent = "X";
    botao.id = "btn" + cont;
    cont++;

    linha.appendChild(nome);
    linha.appendChild(idade);
    linha.appendChild(cpf);
    linha.appendChild(botao);

    document.querySelector("tbody").appendChild(linha);
}

function remover(event){
    console.log(event);
    event.target.parentNode.remove();
}

function limite_textarea(valor) {
    quant = 11;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto + " restantes";
    } else {
        document.getElementById('cpf').value = valor.substr(0,quant);
    }
}
