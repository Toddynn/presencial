document.getElementById("novo").addEventListener("click", novo);

function novo(){
    let paragrafos = document.querySelectorAll('p');

    for(let i = 0; i <= 5; i++){
        paragrafos[i].innerHTML = i+1;
    }
}