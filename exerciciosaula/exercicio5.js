document.querySelector("#adicionar").addEventListener("click", armazenar);
document.querySelector("#remover").addEventListener("click", remover);

function remover(event){
    event.preventDefault();

    let form = document.querySelector("#formulario");

    let chave = form.chave.value;

    localStorage.removeItem(chave);
    form.reset();
}
function armazenar(event){
    event.preventDefault();

    let form = document.querySelector("#formulario");

    let chave = form.chave.value;
    let texto = form.texto.value;

    localStorage.setItem(chave, texto);
}

console.log(event);