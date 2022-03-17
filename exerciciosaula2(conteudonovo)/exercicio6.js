document.querySelector("#adicionar").addEventListener("click", adicionar)
document.querySelector("#somar").addEventListener("click", somar)
document.querySelector("#filtrar").addEventListener("click", filtrar)

var registros = [];
var registrosTemporarios = [];
var filtroIdade;

function adicionarRegistro(nome, idade, patrimonio){
    registros.push({nome: nome, idade: idade, patrimonio: patrimonio});
}

function adicionarRegistroTemporario(nome, idade, patrimonio){
    registros.push({nome: nome, idade: idade, patrimonio: patrimonio});
}

function adicionar(event){
    event.preventDefault();

    let form = document.querySelector("#formulario");
    let nome = form.nome.value;
    let idade = form.idade.value;
    let patrimonio = form.patrimonio.value;

    adicionarRegistro(nome, idade, patrimonio);
    criarLinha(nome, idade, patrimonio);
}

function criarLinha(formNome, formIdade, formPatrimonio){
    let linha = document.createElement('tr');
    let nome = document.createElement('td');
    let idade = document.createElement('td');
    let patrimonio = document.createElement('td');

    nome.textContent = formNome;
    idade.textContent = formIdade;
    patrimonio.textContent = formPatrimonio;

    linha.appendChild(nome);
    linha.appendChild(idade);
    linha.appendChild(patrimonio);
    document.querySelector('tbody').appendChild(linha);

}

function filtrarIdade(registro){
    return registro.idade >= filtroIdade;
}

function filtrar(event){
    event.preventDefault();

    filtroIdade = parseInt(document.querySelector('#filtroIdade').value);

    registrosTemporarios = registros.filter(filtrarIdade);

    let tabela = document.querySelector('tbody');
    tabela.innerHTML = '';
    for(let registro of registrosTemporarios){
        criarLinha(registro.nome, registro.idade, registro.patrimonio);
    }
}

function somar(event){
    event.preventDefault();

    let soma = 0;

    if(registrosTemporarios.length === 0){
        registrosTemporarios = registros;
    }
    for(let registro of registrosTemporarios){
        soma += parseInt(registro.patrimonio);
    }
    document.querySelector("#somatoria").value = soma;

}