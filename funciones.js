const bllenar = document.getElementById("llenar"); 
let div = document.getElementById("main-content");

function crearDivisiones(n){
    let fila;
    for (let i = 0; i < n; i++) {
        fila = div.appendChild("div");
        div.setAttributeNS("class", "fila")
        for (let j = 0; j < n; j++) {
            div.appendChild("div");
        }
    }
}

bllenar.onclick = function(){crearDivisiones(prompt("ingrese una cantidad:"))};