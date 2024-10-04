const liczba_a = document.querySelector('#a')

const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)

    let mm = a * 25.3995

    wynik.innerHTML = `
    
    Wynik w milimetrach: ${mm}mm
    
    `

})