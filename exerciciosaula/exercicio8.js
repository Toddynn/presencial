class Conta{
    constructor(nome, saldo){
        this.nome = nome;
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
}

let pessoa = new Conta("Junior", 4000);
pessoa.deposito(300);
console.log(pessoa);
pessoa.saque(1500);
console.log(pessoa);