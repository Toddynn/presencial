document.querySelector("#editar").addEventListener("click", editar);

function editar(){
    let texto = document.querySelector("#texto").value;
    let paragrafo = document.querySelector("#paragrafo");
    paragrafo.innerHTML = texto;
}

document.querySelector("")