const liczba_x = document.querySelector('#x')

const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let x = parseFloat(liczba_x.value)

    let wartosc = Math.pow(x, 2) / Math.pow((1 + Math.abs(x)), 2)

    wynik.innerHTML = `
    
    X = ${x}<br>
    Wartosc: ${wartosc}<br>
    
    `
})