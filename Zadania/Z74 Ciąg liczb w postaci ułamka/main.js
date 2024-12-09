const liczba_n = document.querySelector('#n');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let n = parseInt(liczba_n.value);

    for (i = 1; i <= n; i++){
        let u = (1 / i).toFixed(6);
        wynik.innerHTML += "1/" + i + " - " + u + "<br>";
    }
})