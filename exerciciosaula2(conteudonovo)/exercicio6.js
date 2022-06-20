document.querySelector("#adicionar").addEventListener("click", adicionar);

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
    patrimonios.push(patrimonios);

    localStorage.setItem("nomes", JSON.stringify(nomes));
    localStorage.setItem("idades", JSON.stringify(idades));
    localStorage.setItem("patrimonios", JSON.stringify(patrimonios));

    criarLinha(nome, idade, patrimonio);
    form.reset();
}

function iniciarTabela(nomes, idades, patrimonios){
    for(i = 0; i < nomes.length; i++){
        criarLinha(nomes[i], idades[i], patrimonios[i]);
    }
}

function criarLinha(formNome, formIdade, formPatrimonio){
    var linha = document.createElement('tr');
    var nome = document.createElement('td');
    var idade = document.createElement('td');
    var patrimonio = document.createElement('td');

    nome.textContent = formNome;
    idade.textContent = formIdade;
    patrimonio.textContent = formPatrimonio;

    linha.appendChild(nome);
    linha.appendChild(idade);
    linha.appendChild(patrimonio);
    document.querySelector("tbody").appendChild(linha);

}
