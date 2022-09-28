/* juego del ahorcado
usuario solo tiene 6 intentos o errores, debe de haber un contador en el html que muestre el numero de intentos
de una lista de palabras, con random selecciona alguna palabra y se empiece a jugar 
*/

const palabras = ["casa", "elefante", "soda", "telefono", "lapiz", "botella"];


let palabrasUsadas = document.getElementById("palabrasUsadas");


function selectPalabra (palabra) {
    return palabra[Math.floor((Math.random()*palabras.length))];
}
selectPalabra([palabras])

function intentosContador() {
    
}

  
function ahorcado() {
    let letraIngresada1 = document.getElementById("letraIngresada").value;
    if (letraIngresada1 === 1) {
        return 1

        var intentos = document.getElementById("intentos");
        var intentos = 6;
        inner

    }
    else {
        return 2
    }
};