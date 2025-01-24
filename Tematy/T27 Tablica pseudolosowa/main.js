const liczba_n = document.querySelector('#n');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    let n = parseInt(liczba_n.value);
    let tab = [];
    for (let i = 0; i < n; i++) {
        tab[i] =  Math.random();
    }
    let wynikTekst = `<h3>Tablica liczb:</h3><br>`;
    for (let i = 0; i < n; i++) {
        wynikTekst += `Liczba `+ i + `: ` + tab[i] + `<br>`;
    }
    let max = Math.max(...tab);
    wynikTekst += `<b>Maksymalna wartość:</b>${max}<br>`;
    wynik.innerHTML = wynikTekst;
})