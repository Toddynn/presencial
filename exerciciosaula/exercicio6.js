function Animal(tipo, idade, peso, cor){
    this.tipo = tipo;
    this.idade = idade;
    this.peso = peso;
    this.cor = cor;
}

var animais = []
animais.push(new Animal('Cachorro', 30, 10, 'marrom'));
animais.push(new Animal('Gato', 10, 5, 'preto'));
animais.push(new Animal('Periquito', 2, 250, 'amarelo'));
animais.push(new Animal('Urso', 15, 500, 'marrom'));
animais.push(new Animal('Capivara', 12, 75, 'laranja'));

for(let animal of animais){
    for(let prop in animal){
        console.log(prop, animal[prop])
    }
}