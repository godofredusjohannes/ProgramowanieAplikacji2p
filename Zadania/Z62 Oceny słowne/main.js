const ocena = document.querySelector('#a');

const wynik = document.querySelector('#wynik');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    let o = parseInt(ocena.value);

    let slownie = 0;

    switch (o) {
        case 0:
            slownie = "nieklasyfikowany";
            break;
        case 1:
        case 2:
        case 3:
            slownie = "poprawny";
            break;
        case 4:
        case 5:
            slownie = "dobry";
            break;
        case 6:
            slownie = "wyróżniający";
            break;
        default:
            slownie = "niewłaściwa liczba";
            break;
    }
            wynik.innerHTML = `
            
            Podana liczba to: ${o} <br>
            Nazwa oceny: ${slownie}
            
            `
})