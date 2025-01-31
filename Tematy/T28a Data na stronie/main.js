const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

function dzisiejszaData() {
    const dzisiaj = new Date();
    const dzien = String(dzisiaj.getDate()).padStart(2, '0');
    const miesiac = String(dzisiaj.getMonth() + 1).padStart(2, '0');
    const rok = dzisiaj.getFullYear();
    return `${dzien}.${miesiac}.${rok}`;
}

console.log(dzisiejszaData);

function formatujDateRzymsko() {
    const dzisiaj = new Date();
    const dzien = String(dzisiaj.getDate()).padStart(2, '0');
    const miesiac = String(dzisiaj.getMonth() + 1).padStart(2, '0');
    const rok = dzisiaj.getFullYear();

    const miesiace = [
        "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"
    ];

    return `${dzien}.${miesiace[miesiac-1]}.${rok}`;
}

console.log(formatujDateRzymsko());

function formatujDatePolsko() {
    const dzisiaj = new Date();
    const dzien = String(dzisiaj.getDate()).padStart(2, '0');
    const miesiac = String(dzisiaj.getMonth() + 1).padStart(2, '0');
    const rok = dzisiaj.getFullYear();

    const miesiace = [
        "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
    ];

    return `${dzien}.${miesiace[miesiac-1]}.${rok}`;
}

console.log(formatujDatePolsko());

btn.addEventListener('click', function(){
    wynik.innerHTML += dzisiejszaData() + '<br>' + formatujDateRzymsko() + '<br>' + formatujDatePolsko();
})