class Punkt {

    constructor(nazwa, x ,y) {
        this.nazwa = nazwa;
        this.x = x;
        this.y = y;
    }

    info(){
        document.write(`Punkt ${this.nazwa}, ma współrzędne x: ${this.x} oraz y: ${this.y}.<br>`);
    }
}
class Odcinek {

    constructor(nazwa, punkt1, punkt2) {
        this.nazwa = nazwa;
        this.punkt1 = new Punkt("Punkt1")
        this.punkt2 = new Punkt("Punkt2")
    }
    dlugosc() {
        document.write(`${Math.sqrt(Math.pow(punkt2.x - punkt1.x, 2) + Math.pow(punkt2.y - punkt1.y, 2))}<br>`)
    }
    info(){
        document.write(`Odcinek ${odc.nazwa} o punktach "${punkt1.nazwa}" oraz "${punkt2.nazwa}" ma długość: `)
    }
}

let punkt1 = new Punkt("Dom",50,100 );
let punkt2 = new Punkt("Szkola",70,150 );
punkt1.info();
punkt2.info();

let odc = new Odcinek("Długość trasy do szkoły", punkt1, punkt2);
odc.info();
odc.dlugosc();