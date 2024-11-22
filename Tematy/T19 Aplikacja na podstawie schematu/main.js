let a = prompt("Wypisz a:")
let b = prompt("Wypisz b:")

let y = 0;

    if (a <= 0 && b <= 0) {
        let i = 1;
        y = 0;
        document.write("I = " + i + '<br>')
    }
    else if (a <= 0 && b >= 0) {
        let i = 2;
        y = 1;
        document.write("I = " + i + '<br>')
    }
    else if (a > 0 && b <= 0) {
        let i = 3;
        y = 2;
        document.write("I = " + i + '<br>')
    }
    else{
        let i = 4;
        y = 3;
        document.write("I = " + i + '<br>')
    }
    document.write("Y =" + y)