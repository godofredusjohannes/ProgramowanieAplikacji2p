const liczba_a = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let a = parseInt(liczba_a.value);

    for (i = 1; i <= a; i++) {
        if (i % 2 == 0) {
            wynik.innerHTML += i+"; ";
        }
    }
})