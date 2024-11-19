const miesiac = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let m = parseInt(miesiac.value);

    let dni = 0;

    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            dni = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            dni = 30;
            break;
        case 2:
            dni = 28;
            break;
        default:
            dni = "[błąd]";
            break;
    }
            wynik.innerHTML = `
            
            Podana liczba to: ${m} <br>
            Ilość dni w miesiącu: ${dni}
            
            `
})