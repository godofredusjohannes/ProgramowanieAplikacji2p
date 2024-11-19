const numer = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let n = parseInt(numer.value);

    let dzien = 0;

    switch (n) {
        case 1:
            dzien = "Poniedziałek.";
            break;
        case 2:
            dzien = "Wtorek.";
            break;
        case 3:
            dzien = "Środa.";
            break;
        case 4:
            dzien = "Czwartek.";
            break;
        case 5:
            dzien = "Piątek.";
            break;
        case 6:
            dzien = "Sobota.";
            break;
        case 7:
            dzien = "Niedziela.";
            break;
        default:
            dzien = "Nie ma takiego dnia";
            break;
    }
            wynik.innerHTML = `
            
            ${n} dzień tygodnia to ${dzien}
            
            `
})