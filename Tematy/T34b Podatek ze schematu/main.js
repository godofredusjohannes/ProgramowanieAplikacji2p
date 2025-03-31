const cena = document.querySelector('#cena');
const typ = document.querySelector('#typ');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let c = parseInt(cena.value);
    let t = typ.value;
    let p;

    if (c >= 200){
        if (c <= 1000) {
            if (t === "d") {
                p = (c * (0.15 - 0.05)).toFixed(2);
            }
            else {
                p = (c * 0.15).toFixed(2);
            }
        }
        else {
            if (t === "d") {
                p = (c * (0.22 - 0.05)).toFixed(2);
            }
            else {
                p = (c * 0.22).toFixed(2);
            }
        }
    }
    else {
        p = 0;
    }

    wynik.innerHTML = `Wynik:<br>Cena: ${c}<br>Typ: ${t}<br>Podatek: ${p}`;

})