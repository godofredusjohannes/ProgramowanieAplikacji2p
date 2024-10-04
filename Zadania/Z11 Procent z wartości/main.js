const liczba_a = document.querySelector('#a')
const liczba_prc = document.querySelector('#prc')

const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)

    let prc = parseFloat(liczba_prc.value)

    let procent = (prc / 100) * a

    wynik.innerHTML = `
    
    ${prc}% z ${a} to: ${procent}<br>
    
    `
})