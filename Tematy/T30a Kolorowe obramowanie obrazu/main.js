const obrazek = document.querySelector("img");
const nabierak = document.getElementById("color");
const suwak = document.getElementById("suwak");

const originalWidth = obrazek.width;
const originalHeight = obrazek.height;

function changeBorder() {
    const color = nabierak.value;
    const thickness = parseInt(suwak.value); // Pobranie wartości suwaka jako liczby

    obrazek.style.border = `${thickness}px solid ${color}`;

    obrazek.style.width = `${originalWidth - thickness * 2}px`;
    obrazek.style.height = `${originalHeight - thickness * 2}px`;
}

nabierak.addEventListener("input", changeBorder);
suwak.addEventListener("input", changeBorder);