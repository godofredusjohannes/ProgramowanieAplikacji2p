const procent = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let p = parseInt(procent.value);

    let punkty = Math.floor(p / 10);

    let ocena = 0;

    switch (punkty) {
        case 10:
            ocena = 5;
            break;
        case 9:
            ocena = 5;
            break;
        case 8:
            ocena = 4.5;
            break;
        case 7:
            ocena = 4;
            break;
        case 6:
            ocena = 3.5;
            break;
        case 5:
            ocena = 3;
            break;
        default:
            ocena = 2;
            break;
    }
            wynik.innerHTML = `
            
            Dla wartości procentowej ${p}% ocena wynosi: ${ocena}
            
            `
})