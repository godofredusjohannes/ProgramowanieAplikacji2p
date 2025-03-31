const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    while(a != b){
        if (a > b){
            a = a - b;
        }
        if (a < b){
            b = b - a;
        }
    }

    wynik.innerHTML = `Wynik: ${a}.`;

})