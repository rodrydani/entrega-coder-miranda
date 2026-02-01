/*----- JS DE ACCESORIES -----*/

/*const accessories = [
  {
    id: 1,
    name: "Motor oil 5W-30",
    category: "Maintenance",
    price: 25,
    stock: 15,
    image: "../assets/accesories/motor-oil.png",
    description: "Synthetic engine oil 5W-30 suitable for modern vehicles."
  },
  {
    id: 2,
    name: "Air freshener - Vanilla",
    category: "Interior",
    price: 8,
    stock: 40,
    image: "../assets/accesories/freshener-vanilla.png",
    description: "Long-lasting vanilla fragrance for car interior."
  },
  {
    id: 3,
    name: "Air freshener - Ocean",
    category: "Interior",
    price: 8,
    stock: 30,
    image: "../assets/accesories/ocean-fresh.png",
    description: "Ocean-breeze scent air freshener."
  },
  {
    id: 4,
    name: "Phone holder",
    category: "Interior",
    price: 15,
    stock: 25,
    image: "../assets/accesories/phone-holder.png",
    description: "Adjustable phone holder for dashboard or windshield."
  },
  {
    id: 5,
    name: "Steering wheel cover",
    category: "Interior",
    price: 18,
    stock: 20,
    image: "../assets/accesories/steering-wheel-covers.png",
    description: "Non-slip steering wheel cover, universal size."
  },
  {
    id: 6,
    name: "Seat cover set",
    category: "Interior",
    price: 55,
    stock: 12,
    image: "../assets/accesories/seat-cover.png",
    description: "Complete seat cover set, washable fabric."
  },
  {
    id: 7,
    name: "USB car charger",
    category: "Electronics",
    price: 12,
    stock: 35,
    image: "../assets/accesories/—Pngtree—20 000-capable car charger_4414283.png",
    description: "Dual USB port fast car charger."
  },
  {
    id: 8,
    name: "LED interior light kit",
    category: "Electronics",
    price: 30,
    stock: 10,
    image: "../assets/accesories/led-cable.png",
    description: "Multicolor LED strip for interior ambient lighting."
  },
  {
    id: 9,
    name: "Jump starter cables",
    category: "Safety",
    price: 28,
    stock: 18,
    image: "../assets/accesories/jump-cable.png",
    description: "Heavy-duty jumper cables, 3 meters long."
  },
  {
    id: 10, name: "Portable tire inflator",
    category: "Maintenance",
    price: 42,
    stock: 8,
    image: "../assets/accesories/tire_inflator.png",
    description: "Electric air compressor for car tires."
  },
  { id: 11, name: "Cleaning microfiber cloth", category: "Cleaning", price: 6, stock: 60, image: "../assets/accesories/Cleaning microfiber cloth.png", description: "Soft microfiber cloth, scratch-free cleaning." },
  { id: 12, name: "Dashboard polish spray", category: "Cleaning", price: 14, stock: 22, image: "../assets/accesories/phone-holder.png", description: "Dashboard protector and polish spray." },
  { id: 13, name: "Car vacuum cleaner", category: "Cleaning", price: 48, stock: 9, image: "../assets/accesories/vacuum.png", description: "Compact handheld vacuum cleaner for car interiors." },
  { id: 14, name: "Trunk organizer", category: "Interior", price: 22, stock: 14, image: "../assets/accesories/trunk_organizer.png", description: "Foldable trunk organizer with multiple compartments." },
  { id: 15, name: "Windshield sunshade", category: "Exterior", price: 16, stock: 26, image: "../assets/accesories/sunshade.png", description: "Reflective sunshade to protect the dashboard from UV." },
  { id: 16, name: "Snow/ice scraper", category: "Exterior", price: 10, stock: 25, image: "../assets/accesories/ice_scraper.png", description: "Durable ice scraper for windshield cleaning." },
  { id: 17, name: "Tire pressure gauge", category: "Maintenance", price: 13, stock: 18, image: "../assets/accesories/pressure_gauge.png", description: "Digital tire pressure measuring tool." },
  { id: 18, name: "First aid kit", category: "Safety", price: 26, stock: 12, image: "../assets/accesories/first_aid.png", description: "Compact first aid emergency kit for vehicles." },
  { id: 19, name: "Emergency warning triangle", category: "Safety", price: 20, stock: 15, image: "../assets/accesories/warning_triangle.png", description: "Reflective roadside emergency warning triangle." },
  { id: 20, name: "Car washing kit", category: "Cleaning", price: 35, stock: 10, image: "../assets/accesories/wash_kit.png", description: "Complete exterior washing kit with shampoo and sponge." }

];*/

/*---- JS CON JSON ----*/

let accessories = [];




/*----- RENDER DE PRODUCTOS -----*/

const container = document.getElementById("accessories-container");

function renderAccessories(arr) {
  if (!container) return;

  container.innerHTML = "";

  arr.forEach(accessory => {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "mb-4");

    card.innerHTML = `
      <div class="accesories-card">
        <img src="${accessory.image}" class="card-img-top" alt="${accessory.name}">

        <div class="card-body">
          <h5 class="card-title">${accessory.name}</h5>
          <p class="card-text">${accessory.description}</p>
          <p><strong>US$ ${accessory.price}</strong></p>

          <button class="btn btn-success add-to-cart" data-id="${accessory.id}">
            Add to cart
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}



/*----------- SLIDER -----------*/

const cardsPerPage = 8;
let currentPage = 0;

function renderSlider() {
  const cards = document.querySelectorAll('#accessories-container .col-md-3');
  if (!cards.length) return;

  const start = currentPage * cardsPerPage;
  const end = start + cardsPerPage;

  cards.forEach((card, index) => {
    card.style.display = (index >= start && index < end) ? "block" : "none";
  });
}

const next = document.getElementById('nextSlide');
const prev = document.getElementById('prevSlide');

if (next && prev) {
  next.addEventListener('click', () => {
    const cards = document.querySelectorAll('#accessories-container .col-md-3');
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    currentPage = (currentPage < totalPages - 1) ? currentPage + 1 : 0;
    renderSlider();
  });

  prev.addEventListener('click', () => {
    const cards = document.querySelectorAll('#accessories-container .col-md-3');
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    currentPage = (currentPage > 0) ? currentPage - 1 : totalPages - 1;
    renderSlider();
  });
}



/*----------- CARRITO -----------*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* agregar producto */
document.addEventListener("click", e => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = Number(e.target.dataset.id);

    const product = accessories.find(item => item.id === id);

    if (!product) {
      console.error("Product not found:", id);
      return;
    }

    const found = cart.find(item => item.id === id);

    if (found) {
      found.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    renderCart();
    // notification
    showAddToCartToast(product.name);
  }
});

function calculateTotal() {
  return cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

/*----------- RENDER UNIFICADO DEL CARRITO -----------*/

function renderCart() {
  const cartContent = document.querySelector(".cart-content");
  const cartItems = document.getElementById("cart-items");


  if (!cartContent && !cartItems) return;

  if (cart.length === 0) {
    const empty = `<p>There are no products in the cart.</p>`;
    if (cartContent) cartContent.innerHTML = empty;
    if (cartItems) cartItems.innerHTML = empty;

    const totalElement = document.getElementById("cart-total");
    if (totalElement) {
      totalElement.textContent = "Total: US$ 0";
    }

    return;
  }

  let html = "";

  cart.forEach(item => {
    html += `
   <div class="cart-item">
  <img src="${item.image}" alt="${item.name}" class="cart-thumb">

  <div class="cart-info">
    <p><strong>${item.name}</strong></p>
    <p>US$ ${item.price}</p>
    <p>Quantity: ${item.quantity}</p>
  </div>

  <button class="btn btn-danger remove-item" data-id="${item.id}">
    Remove
  </button>
</div>
<hr>
    `;
  });

  if (cartContent) cartContent.innerHTML = html;
  if (cartItems) cartItems.innerHTML = html;

  const totalElement = document.getElementById("cart-total");

  if (totalElement) {
    totalElement.textContent = `Total: US$ ${calculateTotal()}`;
  }

}

/* eliminar item */

document.addEventListener("click", e => {
  if (e.target.classList.contains("remove-item")) {

    const id = Number(e.target.dataset.id);

    cart = cart.filter(item => item.id !== id);

    saveCart();
    renderCart();
  }
});

renderCart();

/*----------- CHECKOUT -----------*/

const checkoutBtn = document.getElementById("checkout-btn");
function getCartSummary() {
  return cart.map(item => `
    <p>
      ${item.name} x${item.quantity} — 
      <strong>US$ ${item.price * item.quantity}</strong>
    </p>
  `).join("");
}
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;

    const cartSummary = getCartSummary();

    Swal.fire({
      title: "Confirm purchase",
      html: `
      <div style="text-align:left">
        ${cartSummary}
        <hr>
        <p><strong>${document.getElementById("cart-total").textContent}</strong></p>
      </div>
    `,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Buy now",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "my-swal",
        title: "my-swal-title",
        confirmButton: "my-swal-confirm",
        cancelButton: "my-swal-cancel"
      }

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Purchase completed",
          text: "Thank you for your order!",
          icon: "success"
        });

        cart = [];
        saveCart();
        renderCart();
      }
    });
  });

}

function showAddToCartToast(productName) {
  Swal.fire({
    toast: true,
    position: "bottom-end",
    icon: "success",
    html: `<span class="toast-text">${productName} added to cart</span>`,
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    customClass: {
      popup: "my-swal"
    }
  });
}

fetch("data/accessories.json")

  .then(response => response.json())
  .then(data => {
    accessories = data;
    renderAccessories(accessories);
    renderSlider();
  })
  .catch(error => {
    console.error("Error loading accessories:", error);
  });
