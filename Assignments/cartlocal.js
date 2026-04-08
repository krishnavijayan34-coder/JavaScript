function addToCart() {
    let product = document.getElementById("product").value;

    let cart = localStorage.getItem("cart");

    if (cart) {
        cart = cart + "," + product; 
    } else {
        cart = product; 
    }

    localStorage.setItem("cart", cart); 

    displayCart();
}


function displayCart() {
    let cart = localStorage.getItem("cart");
    let list = document.getElementById("cartList");

    list.innerHTML = "";

    if (cart) {
        let items = cart.split(","); // convert string to array
        for (let i = 0; i < items.length; i++) {
            let li = document.createElement("li");
            li.innerText = items[i];
            list.appendChild(li);
        }
    }
}


window.onload = function () {
    displayCart();
};