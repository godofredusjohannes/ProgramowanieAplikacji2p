const liczba_a = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let a = parseInt(liczba_a.value);

    for (i = 0; i <= a; i++){
        for (j = 0; j <= a; j++){
            if (j === i) {
                wynik.innerHTML += "<b>1<b>";
            }
            else
                wynik.innerHTML += "0";
        }
        wynik.innerHTML += "<br>";
    }
})