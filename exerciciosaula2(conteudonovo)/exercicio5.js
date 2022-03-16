let pessoas = [ {nome: "João", votou: true}, {nome: "Vinícius", votou: false}, {nome: "Plínio", votou: true}, {nome: "Josemar", votou: false}];

function votantes(pessoa){
    return pessoa.votou;
}

console.log(pessoas.filter(votantes).length);

function contaVoto(total, pessoa){
    if(pessoa.votou){
        return total + 1;
    }
    else{
        return total;
    }
}

console.log(pessoas.reduce(contaVoto, 0));