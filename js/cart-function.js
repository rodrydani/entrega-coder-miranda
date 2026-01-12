
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Guardo carrito en localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart")) {

    const id = Number(e.target.dataset.id);

    addToCart(id);
  }
});

function addToCart(id) {

  const product = accessories.find(item => item.id === id);

  const itemInCart = cart.find(item => item.id === id);

  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
}



function renderCart() {
  const cartItems = document.getElementById("cart-items");

  if (!cartItems) return;

  cartItems.innerHTML = "";

  cart.forEach(item => {

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>US$ ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>

      <button class="btn btn-danger remove-item" data-id="${item.id}">
        Remove
      </button>
      <hr>
    `;

    cartItems.appendChild(div);
  });
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("remove-item")) {
    const id = Number(e.target.dataset.id);

    cart = cart.filter(item => item.id !== id);

    saveCart();
    renderCart();
  }
});