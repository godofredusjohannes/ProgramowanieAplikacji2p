const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_c = document.querySelector('#c')

const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let c = parseFloat(liczba_c.value)

    let Obwod = (a + b + c) / 2

    let p = Math.sqrt(Obwod * (Obwod-a) * (Obwod-b) * (Obwod-c))

    wynik.innerHTML = `
   
    Pole = ${p}<br>
    
    `
})