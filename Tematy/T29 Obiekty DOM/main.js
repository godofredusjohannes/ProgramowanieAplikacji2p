const kontener = document.querySelector('#container');

const heading = document.createElement('h1');
const heading2 = document.createElement('h2');
const heading3 = document.createElement('hr');

heading.textContent = 'Zadanie T29 - Obiekty DOM';
heading2.textContent = 'Autor: Seweryn Poczynek';

kontener.appendChild(heading);
kontener.appendChild(heading3);
kontener.appendChild(heading2);