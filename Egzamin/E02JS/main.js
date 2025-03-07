document.getElementById("indigo").addEventListener("click", function() {
    document.getElementById("prawy").style.backgroundColor = "indigo";
});

document.getElementById("steelblue").addEventListener("click", function() {
    document.getElementById("prawy").style.backgroundColor = "steelblue";
});

document.getElementById("olive").addEventListener("click", function() {
    document.getElementById("prawy").style.backgroundColor = "olive";
});

document.getElementById("kolorCzcionki").addEventListener("change", function() {
    document.getElementById("prawy").style.color = this.value;
});

document.getElementById("rozmiarCzcionki").addEventListener("blur", function() {
    document.getElementById("prawy").style.fontSize = this.value;
});

document.getElementById("rysujRamke").addEventListener("change", function() {
    document.getElementById("obraz").style.border = this.checked ? "2px solid black" : "none";
});

document.querySelectorAll("input[name='punktor']").forEach(function(radio) {
    radio.addEventListener("change", function() {
        document.getElementById("lista").style.listStyleType = this.value;
    });
});