const krotkie = document.querySelector('input[id="Krótkie"]:checked') ? document.querySelector('input[id="Krótkie"]:checked').value : null;
const srednie = document.querySelector('input[id="Średnie"]:checked') ? document.querySelector('input[id="Średnie"]:checked').value : null;
const poldlugie = document.querySelector('input[id="Półdługie"]:checked') ? document.querySelector('input[id="Półdługie"]:checked').value : null;
const dlugie = document.querySelector('input[id="Długie"]:checked') ? document.querySelector('input[id="Długie"]:checked').value : null;

const wynik = document.getElementById('#wynik');
const btn = document.getElementById("button");

btn.addEventListener('click', () => {


        wynik.innerHTML = `Cena strzyżenia: ${krotkie.value}${srednie.value}${poldlugie.value}${dlugie.value}`;

})