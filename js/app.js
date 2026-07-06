// ==============================
// SHOP EASE APP
// ==============================

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // SHOP NOW BUTTON
    // ==========================

    const shopBtn = document.querySelector(".hero button");

    if (shopBtn) {
        shopBtn.addEventListener("click", function () {
            document.querySelector(".products").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // ==========================
    // ADD TO CART
    // ==========================

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.parentElement;

            const productName = card.querySelector("h3").textContent;
            const productPrice = card.querySelector(".price").textContent;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push({
                name: productName,
                price: productPrice
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(productName + " added to cart!");

        });

    });

    // ==========================
    // SEARCH
    // ==========================

    const searchInput = document.querySelector(".search input");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = searchInput.value.toLowerCase();

            document.querySelectorAll(".card").forEach(function (card) {

                const title = card.querySelector("h3").textContent.toLowerCase();

                if (title.includes(value)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

});