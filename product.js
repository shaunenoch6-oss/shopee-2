const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const qty = document.getElementById("qty");

plus.addEventListener("click", function () {
    qty.value = parseInt(qty.value) + 1;
});

minus.addEventListener("click", function () {
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
});

document.querySelector(".cart-btn").addEventListener("click", function () {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: "Wireless Gaming Mouse",
        price: 599,
        quantity: parseInt(qty.value)
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
});

document.querySelector(".buy-btn").addEventListener("click", function () {
    window.location.href = "cart.html";
});