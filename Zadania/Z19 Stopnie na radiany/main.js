const liczba_st = document.querySelector('#st');

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {

    let st = parseInt(liczba_st.value);

    let radian = st * (Math.PI / 180);

    wynik.innerHTML = `
    
    Wynik: ${st}&deg; = ${radian}rad
    
    `

})