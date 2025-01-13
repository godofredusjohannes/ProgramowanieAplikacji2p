const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let Dane = document.querySelector('#dane').value;
    let tekst = Dane.split(" ");
    let imie = tekst[0];
    let nazwisko = tekst[1];

    imie = imie.charAt(0).toUpperCase() + imie.slice(1).toUpperCase().toLowerCase();
    nazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();

    wynik.innerHTML = `
    Twoje imie to: ${imie}, a nazwisko: ${nazwisko}.
    `

})