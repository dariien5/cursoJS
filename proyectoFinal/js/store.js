if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('eliminar')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        // button.addEventListener('click', function(event) {
            // var buttonClicked = event.target
            // buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
            // updateCartTotal()
        // })
    }

    var quantityInputs = document.getElementsByClassName('cantidad-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-carrito')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('comprar-productos')[0].addEventListener('click', purchaseClicked)
    document.getElementsByClassName('eliminar-carrito')[0].addEventListener('click', deleteClicked)

}

function purchaseClicked() {
    // alert('Felicidades por tu compra')
    var cartItems = document.getElementsByClassName('elementos-carrito')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function deleteClicked() {
    // alert('Carrito eliminado')
    var cartItems = document.getElementsByClassName('elementos-carrito')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
    var title =  shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('precio-item')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('first-image')[0].src
    console.log(title, price)
    addItemToCart(title,price,imageSrc)
    updateCartTotal()
}

function addItemToCart(title,price,imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('detalle-carrito')
    // var cartItems = document.getElementsByClassName('carrito')[0]
    var cartItems = document.getElementsByClassName('elementos-carrito')[0]
    var cartItemsNames = cartItems.getElementsByClassName('tit')
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('Ya has añadido este item al carrito')
            return
        }
    }
    var cartRowContents = `
        <div class="container-carrito">
            <div class="img">
                <img src="${imageSrc}" alt="">
            </div>
            <div class="descrip">
                <p class="tit">${title}</p>
                <div class="cantidad">
                    <input class="cantidad-input" type="number" id="quantity" name="quantity" min="1" max="5" value="1">
                    <p class="red">$<span class="precio">${price}</span><span class="txt-unitario"> C/U</span></p>
                    <a class="eliminar eliminar-item" id="eliminar-item">x</a>
                </div>
            </div>
        </div>`
        cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('eliminar')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cantidad-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var carItemContainer = document.getElementsByClassName('carrito')[0]
    var cartRows = carItemContainer.getElementsByClassName('detalle-carrito')
    // carItemContainer.getElementsByClassName('container-carrito')
    // carItemContainer.getElementsByClassName('descrip')
    // carItemContainer.getElementsByClassName('cantidad')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('precio')[0]
        var quantityElement = cartRow.getElementsByClassName('cantidad-input')[0]
        // console.log(priceElement, quantityElement)
        var price = parseFloat(priceElement.innerText)
        // console.log(price)
        var quantity = quantityElement.value
        // console.log(price * quantity)
        total = total + (price * quantity)

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('precio-total')[0].innerText = total
}