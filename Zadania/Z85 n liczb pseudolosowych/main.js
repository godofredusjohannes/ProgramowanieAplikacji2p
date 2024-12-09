const liczba_n = document.querySelector('#n');
const liczba_min = document.querySelector('#min');
const liczba_max = document.querySelector('#max');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let n = parseInt(liczba_n.value);
    let min = parseInt(liczba_min.value);
    let max = parseInt(liczba_max.value);

    let los = 0;

    wynik.innerHTML += "Wylosowane liczby: ";

    for (i = 1; i <= n; i++) {
        los = Math.floor(Math.random() * (max - min) + max) + 1;
        wynik.innerHTML += "<b>" + los + "</b>" + " ";
    }

})