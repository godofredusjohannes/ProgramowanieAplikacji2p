class Czolg {
    nazwa = 'Kajetan mały';
    kolor = "Zielony";
    amunicja = 21;

    info = function (){
        document.write(`Cześć!!! Jestem czołgiem. Nazywam sie ${this.nazwa}. Mój kolor to ${this.kolor}. Ilość amunicji: ${this.amunicja}.<br>`);
    }
    pomaluj = function(nowyKolor){
        this.kolor = nowyKolor;
        document.write(`Pomalowałeś czołga na kolor: ${this.kolor}.<br>`);
    }
}

let kajetan = new Czolg();
console.log(kajetan);
kajetan.info();

kajetan.pomaluj('Różowy');
kajetan.info();