class Czolg {

    constructor(n, k, a) {
        this.nazwa = n;
        this.kolor = k;
        this.amunicja = a;
    }

    info(){
        document.write(`Cześć!!! Jestem czołgiem. Nazywam sie ${this.nazwa}. Mój kolor to ${this.kolor}. Ilość amunicji: ${this.amunicja}.<br>`);
    }
    pomaluj(nowyKolor){
        this.kolor = nowyKolor;
        document.write(`Pomalowałeś czołga na kolor: ${this.kolor}.<br>`);
    }
    zaladuj(iloscPociskow){
        this.amunicja += iloscPociskow;
        document.write(`Przeładowałeś ${iloscPociskow} naboi, amunicja teraz wynosi: ${this.amunicja}!<br>`);
    }
    strzel(){
        if (this.amunicja > 0) {
            this.amunicja -= 1;
            document.write(`Pierdykłeś pocisk z armaty, pozostała amunicja: ${this.amunicja}!<br>`);
        }
        else{
            document.write(`Nie masz amunicji.<br>`)
        }
        }
}

let kajetan = new Czolg("Kajetan Mały", "Zielony", 0);
let maurycy2 = new Czolg("Maurycy wklęśły", "Niebieski", 4)
console.log(kajetan);
kajetan.info();

kajetan.pomaluj('Różowy');
kajetan.info();

kajetan.zaladuj(1);
kajetan.info();

kajetan.strzel();
kajetan.info();

kajetan.strzel();
kajetan.info();

console.log(maurycy2);
maurycy2.info();
