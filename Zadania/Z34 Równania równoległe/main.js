const liczba_a1 = document.querySelector('#a1');
const liczba_b1 = document.querySelector('#b1');
const liczba_a2 = document.querySelector('#a2');
const liczba_b2 = document.querySelector('#b2');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {

    let a1 = parseInt(liczba_a1.value);
    let b1 = parseInt(liczba_b1.value);
    let a2 = parseInt(liczba_a2.value);
    let b2 = parseInt(liczba_b2.value);

    let f1 = a1 + b1;
    let f2 = a2 + b2;

    if (f1 === f2){
        wynik.innerHTML = `
        a1 = ${a1}<br>
        b1 = ${b1}<br>
        a2 = ${a2}<br>
        b2 = ${b2}<br><br>
        
        f(x) = a1x + b1 = ${a1}x + ${b1}<br>
        f(x) = a2x + b2 = ${a2}x + ${b2}<br><br>
        Podane proste są równoległe.
        `
    }
    else{
        wynik.innerHTML = `
        a1 = ${a1}<br>
        b1 = ${b1}<br>
        a2 = ${a2}<br>
        b2 = ${b2}<br><br>
        
        f(x) = a1x + b1 = ${a1}x + ${b1}<br>
        f(x) = a2x + b2 = ${a2}x + ${b2}<br><br>
        Podane proste nie są równoległe.
        `
    }

})