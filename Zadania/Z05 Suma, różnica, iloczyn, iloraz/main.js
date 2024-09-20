const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')

const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)

    let iloraz = a / b
    let iloczyn = a * b
    let suma = a + b
    let roznica = a - b

    wynik.innerHTML = `
    
    a = ${a}<br>
    b = ${b}<br>
    
    Suma = ${suma}<br>
    Różnica = ${roznica}<br>
    Iloraz = ${iloraz}<br>
    Iloczyn = ${iloczyn}<br>
    
    `
})