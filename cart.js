const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartItems.innerHTML = "";

    let grandTotal = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.textContent = "₱0";
        return;
    }

    cart.forEach((item, index) => {

        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        grandTotal += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>₱${item.price}</p>
                    <p>Quantity: ${quantity}</p>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    total.textContent = "₱" + grandTotal;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();

document.getElementById("checkoutBtn").addEventListener("click", function () {
    window.location.href = "checkout.html";
});