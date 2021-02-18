// Dodavanje proizvoda
function dodajProizvod() {
    let ul = document.getElementById("listaProizvoda");
    let proizvod = document.getElementById("proizvod");
    let li = document.createElement("li");
    li.setAttribute('id', proizvod.value);
    li.appendChild(document.createTextNode(proizvod.value));
    ul.appendChild(li);
}

let integer = 0;
// uklanjanje proizvoda
function ukloniProizvod() {
    let ul = document.getElementById("listaProizvoda");
    let proizvod = document.getElementById("proizvod");
    let item = document.getElementById(proizvod.value);
    ul.removeChild(item);
    window.location.reload(true);
}

// Brojac
let uvećaj = document.getElementById('dodaj');
let umanji = document.getElementById('ukloni');

let int = document.getElementById('broj');

uvećaj.addEventListener('click', function () {
    integer += 1;
    int.innerHTML = integer;
})

// Vrati na 0
umanji.addEventListener('click', function () {
    integer = 0;
    int.innerHTML = integer;
})
