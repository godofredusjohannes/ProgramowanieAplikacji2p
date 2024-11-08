const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {

    let min = parseInt(liczba_a.value);
    let max = parseInt(liczba_b.value);

    let liczba_1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let liczba_2 = Math.floor(Math.random() * (max - min + 1)) + min;

    if (liczba_1 > liczba_2){
        wynik.innerHTML = `
        Liczby losowania z zakresu od ${min} do ${max}<br><br>
        Wylosowana liczba 1 = ${liczba_1}<br>
        Wylosowana liczba 2 = ${liczba_2}<br><br>
        
        ${liczba_1} > ${liczba_2}
        `
    }
    else if (liczba_1 < liczba_2){
        wynik.innerHTML = `
        Liczby losowania z zakresu od ${min} do ${max}<br><br>
        Wylosowana liczba 1 = ${liczba_1}<br>
        Wylosowana liczba 2 = ${liczba_2}<br><br>
        
        ${liczba_1} < ${liczba_2}
        `
    }
    else {
        wynik.innerHTML = `
        Liczby losowania z zakresu od ${min} do ${max}<br><br>
        Wylosowana liczba 1 = ${liczba_1}<br>
        Wylosowana liczba 2 = ${liczba_2}<br><br>
        
        ${liczba_1} == ${liczba_2}
        `
    }
})