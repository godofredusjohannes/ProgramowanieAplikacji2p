const krotkie = document.querySelector('#Krótkie');
const srednie = document.querySelector('#Średnie');
const poldlugie = document.querySelector('#Półdługie');
const dlugie = document.querySelector('#Długie');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

        let value = 0;

        if(krotkie.checked){
                value = 25;
        }
        else if(srednie.checked){
                value = 30;
        }
        else if(poldlugie.checked){
                value = 40;
        }
        else if(dlugie.checked){
                value = 50;
        }
        wynik.innerHTML = `Cena strzyżenia: ${value}zł`;

})