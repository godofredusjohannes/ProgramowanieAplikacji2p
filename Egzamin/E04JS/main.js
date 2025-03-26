document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Zapobiega domyślnemu wysłaniu formularza

    let imie = document.querySelector("#imie").value;
    let nazwisko = document.querySelector("#nazwisko").value;
    let email = document.querySelector("#email").value;
    let usluga = document.querySelector("#usluga").value;
    let kopia = document.querySelector("input[name='kopia']").checked;

    if (kopia) {
        let wynik = `<p>${imie} ${nazwisko} <br>${email} <br>${usluga}</p>`;

        document.getElementById("wynik").innerHTML = wynik;
    } else {
        document.getElementById("wynik").innerHTML = "";
    }
});