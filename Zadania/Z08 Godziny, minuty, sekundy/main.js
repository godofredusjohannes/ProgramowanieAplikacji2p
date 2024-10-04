const liczba_a = document.querySelector('#a');

const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)

    let godziny = Math.floor(a / 3600)
    let minuty = Math.floor((a % 3600) / 60)
    let sek = (a % 3600) % 60

    wynik.innerHTML = `
    
    Wynik: ${godziny}g${minuty}m${sek}s<br>
    
    `
})