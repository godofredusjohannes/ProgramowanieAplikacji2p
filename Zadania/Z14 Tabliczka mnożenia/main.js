const liczba_a = document.querySelector('#a')

const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)

    let a1 = 0 * a;
    let a2 = 1 * a;
    let a3 = 2 * a;
    let a4 = 3 * a;
    let a5 = 4 * a;
    let a6 = 5 * a;
    let a7 = 6 * a;
    let a8 = 7 * a;
    let a9 = 8 * a;
    let a10 = 9 * a;
    let a11 = 10 * a;

    wynik.innerHTML = `
    
    x = ${a}<br>
    0 x ${a} = ${a1.toFixed(0)}<br>
    1 x ${a} = ${a2.toFixed(0)}<br>
    2 x ${a} = ${a3.toFixed(0)}<br>
    3 x ${a} = ${a4.toFixed(0)}<br>
    4 x ${a} = ${a5.toFixed(0)}<br>
    5 x ${a} = ${a6.toFixed(0)}<br>
    6 x ${a} = ${a7.toFixed(0)}<br>
    7 x ${a} = ${a8.toFixed(0)}<br>
    8 x ${a} = ${a9.toFixed(0)}<br>
    9 x ${a} = ${a10.toFixed(0)}<br>
    10 x ${a} = ${a11.toFixed(0)}<br>
    
    `
})