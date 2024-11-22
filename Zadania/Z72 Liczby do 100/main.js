const liczba_a = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let a = parseInt(liczba_a.value);

    if (a <= 100){
        for (let i = 1; i <= a;) {
            document.write(i + "; ")
            i++
        }
}

})