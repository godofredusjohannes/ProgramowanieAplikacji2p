function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Wszystkie pola muszą być wypełnione.");
        return false;
    }

    if (!email.includes('@zspglogow.pl')) {
        alert("Adres e-mail musi zawierać domenę '@zspglogow.pl'.");
        return false;
    }

    if (password.length < 8) {
        alert("Hasło musi mieć co najmniej 8 znaków.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Hasła nie pasują do siebie.");
        return false;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Wprowadzone dane:</h2>
        <p><strong>Nazwa użytkownika:</strong> ${username}</p>
        <p><strong>Adres e-mail:</strong> ${email}</p>
        <p><strong>Hasło:</strong> ${password}</p>
    `;

    return false;
}