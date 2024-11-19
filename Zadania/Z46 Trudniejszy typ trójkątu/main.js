const liczba_a = document.querySelector('#a');

const liczba_b = document.querySelector('#b');

const liczba_c = document.querySelector('#c');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {

    let a = parseInt(liczba_a.value);

    let b = parseInt(liczba_b.value);

    let c = parseInt(liczba_c.value);

    let typ = 0;

    if (a === b && a === c && c === b)
    {

        typ = "równoboczny";
    }
    else if (a === b || b === c || a === c)
    {
        typ = "równoramienny";
    }
    else if (a*a + b*b === c*c || b*b + c*c === a*a || c*c + a*a === b*b)
    {
        typ = "prostokątny";
    }
    else
    {
        typ = "dowolny";
    }

        wynik.innerHTML = `
        Trójkąt jest ${typ}
        `
})