const liczba_a = document.querySelector('#a');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {

    let a = parseInt(liczba_a.value);

    let kwadrat = a * a;

    let szescian = a * a * a;

    wynik.innerHTML = `
    
    Wynik:<br>
    Kwadrat ${a} = ${kwadrat}<br>
    Szescian ${a} = ${szescian}<br>
    
    
    `

})