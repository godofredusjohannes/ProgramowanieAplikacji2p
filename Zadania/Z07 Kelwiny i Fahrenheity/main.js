const liczba_a = document.querySelector('#a')

const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let a = parseFloat(liczba_a.value)

    let kelwin = a + 273.15

    let fahrenheit = a * 9 / 5 + 32

    wynik.innerHTML = `
    
    Temperatura w &deg;F = ${fahrenheit}<br>
    
    Temperatura w &deg;K = ${kelwin}<br>
    
    `
})