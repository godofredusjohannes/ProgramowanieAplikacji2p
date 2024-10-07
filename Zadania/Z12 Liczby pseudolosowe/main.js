const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')

const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    let a = parseFloat(liczba_a.value)

    let b = parseFloat(liczba_b.value)

    let liczba1 = Math.floor(Math.random() * (b - a) + a) + 1;
    let liczba2 = Math.floor(Math.random() * (b - a) + a) + 1;
    let liczba3 = Math.floor(Math.random() * (b - a) + a) + 1;
    let liczba4 = Math.floor(Math.random() * (b - a) + a) + 1;
    let liczba5 = Math.floor(Math.random() * (b - a) + a) + 1;


    let suma = liczba1 + liczba2 + liczba3 + liczba4 + liczba5;

    let iloczyn = liczba1 * liczba2 * liczba3 * liczba4 * liczba5;

    let srednia = (liczba1 + liczba2 + liczba3 + liczba4 + liczba5) / 5;

    wynik.innerHTML = `
    
    <ol>
    <li>
    p1 = ${liczba1}<br>
    </li>
    <li>
    p2 = ${liczba2}<br>
    </li>
    <li>
    p3 = ${liczba3}<br>
    </li>
    <li>
    p4 = ${liczba4}<br>
    </li>
    <li>
    p5 = ${liczba5}<br>
    </li>
    </ol>
    
    Suma liczb: ${liczba1} + ${liczba2} + ${liczba3} + ${liczba4} + ${liczba5} = ${suma}<br>
    
    Iloczyn liczb: ${liczba1} * ${liczba2} * ${liczba3} * ${liczba4} * ${liczba5} = ${iloczyn}<br>
    
    Średnia liczb = ${srednia}
    
    `

})