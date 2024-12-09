const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);


    wynik.innerHTML += "A - ilość znaków w wierszu: " + a + "<br>";
    wynik.innerHTML += "B - ilość wierszy: " + b + "<br>";

    for (i = 0; i <= b; i++){
        for (j = 0; j <= a; j++){
            wynik.innerHTML += "X";
        }
        wynik.innerHTML += "<br>";
    }
})