const licznik = document.querySelector('#a');
const mianownik = document.querySelector('#b');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {

    let licz = parseInt(licznik.value);
    let mian = parseInt(mianownik.value);

    if (mian === 0) {
        wynik.innerHTML = `
        Nie mogę podzielić przez zero.
        `
    }
    else {
        let cal = Math.floor(licz / mian)
        let licz_2 = licz % mian
        wynik.innerHTML =
            `
            licznik = ${licz}<br>
            mianownik = ${mian}<br><br>
            Ułamek właściwy to: ${cal} <sup>${licz_2}</sup>/<sub>${mian}</sub>
            `
    }
})