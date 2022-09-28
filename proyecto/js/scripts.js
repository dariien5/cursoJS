function getLocalTime(){
    let time = new Date();
    let timeDiv = document.getElementById('timeDiv');
    timeDiv.innerHTML=time.toLocaleTimeString();
}
setInterval(getLocalTime, 1000);

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
            icon: 'info',
            confirmButtonText: 'Continuar'
        })
    });
});
