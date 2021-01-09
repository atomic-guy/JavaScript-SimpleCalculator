let dzialanieLista = [];

function wyswietl() {
    let wyswietlacz = document.getElementById('wyswietlacz-tekst');
    let dzialanie = wyswietlacz.textContent;
    let ost = dzialanie.slice(-1)
    let getId = this.id;
    let wartoscLubDzialanie = "";
    if (getId == "1") {
        wartoscLubDzialanie = 1;
    } else if (getId == "2") {
        wartoscLubDzialanie = 2;
    } else if (getId == "3") {
        wartoscLubDzialanie = 3;
    } else if (getId == "4") {
        wartoscLubDzialanie = 4;
    } else if (getId == "5") {
        wartoscLubDzialanie = 5;
    } else if (getId == "6") {
        wartoscLubDzialanie = 6;
    } else if (getId == "7") {
        wartoscLubDzialanie = 7;
    } else if (getId == "8") {
        wartoscLubDzialanie = 8;
    } else if (getId == "9") {
        wartoscLubDzialanie = 9;
    } else if (getId == "dodawanie") {
        if (ost == "+" || ost == "-" || ost == "*" || ost == "/" || ost == ".") {
            wyswietlacz.textContent = wyswietlacz.textContent.slice(0, -1);
        };
        wartoscLubDzialanie = "+";
    } else if (getId == "odejmowanie") {
        if (ost == "+" || ost == "-" || ost == "*" || ost == "/" || ost == ".") {
            wyswietlacz.textContent = wyswietlacz.textContent.slice(0, -1);
        };
        wartoscLubDzialanie = "-";
    } else if (getId == "mnozenie") {
        if (ost == "+" || ost == "-" || ost == "*" || ost == "/" || ost == ".") {
            wyswietlacz.textContent = wyswietlacz.textContent.slice(0, -1);
        };
        wartoscLubDzialanie = "*";
    } else if (getId == "dzielenie") {
        if (ost == "+" || ost == "-" || ost == "*" || ost == "/" || ost == ".") {
            wyswietlacz.textContent = wyswietlacz.textContent.slice(0, -1);
        };
        wartoscLubDzialanie = "/";
    } else if (getId == "pierwiastek") {
        wyswietlacz.textContent = Math.sqrt(wyswietlacz.textContent);
        dzialanieLista.length = 0;
        dzialanieLista.push(wyswietlacz.textContent);
    } else if (getId == "0") {
        wartoscLubDzialanie = 0;
    } else if (getId == "przecinek") {
        if (ost == "+" || ost == "-" || ost == "*" || ost == "/" || ost == ".") {
            wyswietlacz.textContent = wyswietlacz.textContent.slice(0, -1);
        };
        if (dzialanieLista[dzialanieLista.length - 1] == '.'){
            dzialanieLista.splice(dzialanieLista.length - 1, 1);
        };
        wartoscLubDzialanie = ".";
    }
    dzialanieLista.push(wartoscLubDzialanie);
    wyswietlacz.textContent += wartoscLubDzialanie;
    console.log(dzialanieLista);
    let wyswietlaczLength = wyswietlacz.textContent.length;
    console.log(wyswietlaczLength);
    if (wyswietlaczLength > 17) {
        wyswietlacz.textContent = wyswietlacz.textContent.slice(-17);
    }
}

function czysc() {
    let wyswietlacz = document.getElementById('wyswietlacz-tekst');
    wyswietlacz.innerHTML = "";
    dzialanieLista.length = 0;
}

function oblicz() {
    console.log("lista: " + dzialanieLista);
    let dzialanie = dzialanieLista.join("");
    let wyswietlacz = document.getElementById('wyswietlacz-tekst');
    console.log("dzialania = " + dzialanie + ", " + typeof dzialanie);
    let wynik = eval(dzialanie);
    console.log(dzialanie);
    console.log(wynik);
    wyswietlacz.innerHTML = "";
    wyswietlacz.textContent = wynik.toPrecision(12);
    dzialanieLista.length = 0;
    dzialanieLista.push(wynik);
}

document.getElementById("0").onclick = wyswietl;
document.getElementById("1").onclick = wyswietl;
document.getElementById("2").onclick = wyswietl;
document.getElementById("3").onclick = wyswietl;
document.getElementById("4").onclick = wyswietl;
document.getElementById("5").onclick = wyswietl;
document.getElementById("6").onclick = wyswietl;
document.getElementById("7").onclick = wyswietl;
document.getElementById("8").onclick = wyswietl;
document.getElementById("9").onclick = wyswietl;
document.getElementById("dodawanie").onclick = wyswietl;
document.getElementById("mnozenie").onclick = wyswietl;
document.getElementById("dzielenie").onclick = wyswietl;
document.getElementById("odejmowanie").onclick = wyswietl;
document.getElementById("przecinek").onclick = wyswietl;
document.getElementById("pierwiastek").onclick = wyswietl;
document.getElementById("delete").onclick = czysc;
document.getElementById("wynik").onclick = oblicz;
