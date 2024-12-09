const liczba_a = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let a = parseInt(liczba_a.value);
    let los = 0;

    for (i = 0; i <= a; i++){
        let los = Math.floor(Math.random() * 9 + 1);
        wynik.innerHTML += los + ": ";
        for (j = 1; j <= los;){
            wynik.innerHTML += "|";
            j++;
        }
        wynik.innerHTML += "<br>";
    }
})