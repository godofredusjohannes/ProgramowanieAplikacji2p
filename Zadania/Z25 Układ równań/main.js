const liczba_a1 = document.querySelector('#a1');
const liczba_b1 = document.querySelector('#b1');
const liczba_c1 = document.querySelector('#c1');
const liczba_a2 = document.querySelector('#a2');
const liczba_b2 = document.querySelector('#b2');
const liczba_c2 = document.querySelector('#c2');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {

    let a1 = parseInt(liczba_a1.value);
    let b1 = parseInt(liczba_b1.value);
    let c1 = parseInt(liczba_c1.value);
    let a2 = parseInt(liczba_a2.value);
    let b2 = parseInt(liczba_b2.value);
    let c2 = parseInt(liczba_c2.value);

    let y = ((c2 * a1) - (c1 * a2)) / ((b2 * a1) - (a2 * b1))
    let x = (c1 - (b1 * y)) / a1

    wynik.innerHTML = `
    
    Wynik:<br>
    x = ${x}<br>
    y = ${y}
    
    
    `

})