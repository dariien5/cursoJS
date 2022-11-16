function getLocalTime(){
    let time = new Date();
    let timeDiv = document.getElementById('timeDiv');
    timeDiv.innerHTML=time.toLocaleTimeString();
}
setInterval(getLocalTime, 1000);

$(document).ready(function() {
    $('.comprar-productos').click(function(){
        Swal.fire({
            title: 'Felicidades',
            text: 'Se ha realizado la compra de manera exitosa',
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
    });
});

$(document).ready(function() {
    $('.eliminar-carrito').click(function(){
        Swal.fire({
            title: 'Carrito eliminado',
            text: 'Se ha vaciado de manera exitosa tu carrito de compras',
            icon: 'error',
            confirmButtonText: 'Continuar'
        })
    });
});

$(document).ready(function() {
    $('.mf-add-to-cart-btn').click(function(){
        Swal.fire({
            title: 'Producto agregado',
            text: 'Continua explorando el catalogo',
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
    });
});

function myFav() {
    var fav = document.getElementById("favorite-icon1");
    fav.classList.toggle("favorite-icon");
}
 
$(document).ready(function() {
    $('.alerta-fav').click(function(){
        Swal.fire({
            title: 'Añadido a Favoritos',
            text: 'Guarda tus productos favoritos para despues encontrarlos más facilmente',
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
    });
});


$(document).ready(function() {
    $('.favorite-icon').click(function(){
        Swal.fire({
            title: 'Eliminado de Favoritos',
            text: 'Continua explorando el catalogo y conoce todos nuestros productos',
            icon: 'info',
            confirmButtonText: 'Continuar'
        })
    });
});

$(document).ready(function() {
    $('.eliminar-item').click(function(){
        Swal.fire({
            title: 'Producto eliminado del carrito',
            text: 'Continua explorando el catalogo y conoce todos nuestros productos',
            icon: 'info',
            confirmButtonText: 'Continuar'
        })
    });
});




const preciotblanco = 5000;
const preciotgris = 4500;
const preciothueso = 4200;
const preciotnaranja = 3000;
const preciotnegro = 5200;
// tblanco
// tgris
// thueso
// tnaranja
// tnegro

// let tblanco = document.getElementById("tblanco");
// tblanco.innerHTML = preciotblanco;

document.getElementById("tblanco").innerHTML = preciotblanco;
document.getElementById("tblanco2").innerHTML = preciotblanco;
document.getElementById("tgris").innerHTML = preciotgris;
document.getElementById("tgris2").innerHTML = preciotgris;
document.getElementById("thueso").innerHTML = preciothueso;
document.getElementById("thueso2").innerHTML = preciothueso;
document.getElementById("tnaranja").innerHTML = preciotnaranja;
document.getElementById("tnegro").innerHTML = preciotnegro;

