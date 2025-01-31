const d = document.querySelector('#dzien')
const m = document.querySelector('#miesiac')
const r = document.querySelector('#rok')
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

function dzisiejszaData() {
    const dzisiaj = new Date();
    const dzien = String(dzisiaj.getDate()).padStart(2, '0');
    const miesiac = String(dzisiaj.getMonth() + 1).padStart(2, '0');
    const rok = dzisiaj.getFullYear();
    return `Dzisiaj jest: ${rok}.${miesiac}.${dzien}<br>`;
}

btn.addEventListener('click', function(){

    let dzien = parseInt(d.value)
    let miesiac = parseInt(m.value)
    let rok = parseInt(r.value)

    const dzisiaj = new Date();

    const biezacyRok = dzisiaj.getFullYear();

    let urodziny = new Date(biezacyRok, miesiac - 1, dzien);

    if (urodziny < dzisiaj) {
        urodziny.setFullYear(biezacyRok + 1);
    }

    const roznicaCzasu = urodziny - dzisiaj;

    const pozostaleDni = Math.ceil(roznicaCzasu / (1000 * 60 * 60 * 24));

    wynik.innerHTML += dzisiejszaData() + `Twoje urodziny są: ${rok}.${miesiac}.${dzien}<br>` + `Do twoich urodzin zostało: ${pozostaleDni} dni.<br>`;
})