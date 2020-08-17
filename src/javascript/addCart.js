const cart = document.querySelector(".cart");

function addCart(index) {
    cart.style.display = "block";
    cartItems.push(products[index]);
    cart.innerHTML = `${cartItems.length}`;
}