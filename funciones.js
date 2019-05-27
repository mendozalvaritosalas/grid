const bllenar = document.getElementById("llenar");
let divMain = document.getElementById("main-content");
const divHijo = document.createElement("div");
const divCreados = document.getElementsByClassName("fila");

function crearDivisiones(n) {
    divMain.innerHTML = "";
    for (let i = 0; i < n; i++) {
        divHijo.className = "columna";
        let x = divMain.appendChild(divHijo.cloneNode());
        divHijo.className = "fila";
        for (let j = 0; j < n; j++) {
            x.appendChild(divHijo.cloneNode());
        }
    }
    añadirEventos();
}

function colorAleatorio(element) {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var a = 1; //transparencia entre 0 a 1
    let rgba = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    element.style.backgroundColor = rgba;
}

function añadirEventos() {
    for (let a = 0; a < divCreados.length; a++) {
        divCreados[a].onmouseover = function () {colorAleatorio(divCreados[a])};
    }
}

bllenar.onclick = function () { crearDivisiones(prompt("ingrese una cantidad:")) };

