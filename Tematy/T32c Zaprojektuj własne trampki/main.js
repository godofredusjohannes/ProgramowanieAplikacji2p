document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const mail = document.getElementById("e-mail").value;

    const color = document.querySelector('input[name="color"]:checked') ? document.querySelector('input[name="color"]:checked').value : "Nie wybrano koloru";
    const features = Array.from(document.querySelectorAll('input[name="features[]"]:checked')).map(checkbox => checkbox.value);
    const size = document.querySelector('select[name="size"]').value;

    const resultText = `
                <strong>Imię:</strong> ${name}<br>
                <strong>Wiek:</strong> ${mail}<br><br>
                <strong>Kolor trampków:</strong> ${color}<br>
                <strong>Opcje trampków:</strong> ${features.length > 0 ? features.join(', ') : 'Brak opcji'}<br>
                <strong>Rozmiar trampków:</strong> ${size}
            `;

    const resultDiv = document.getElementById("result");
    const resultContent = document.getElementById("resultContent");

    resultContent.innerHTML = resultText;
    resultDiv.style.display = "block";
});