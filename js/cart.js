// js/cart.js

let cartItems = [];
let cartCount = 0;

/* =====================
   ADD TO CART
===================== */
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const id = btn.dataset.id;
  const title = btn.dataset.title;
  const price = parseFloat(btn.dataset.price.replace("$", ""));
  const img = btn.dataset.img;

  const existingItem = cartItems.find(item => item.id == id);

  if (existingItem) {
    existingItem.qty++;
  } else {
    cartItems.push({ id, title, price, img, qty: 1 });
  }

  cartCount++;
  updateCartUI();
});

/* =====================
   UPDATE CART UI
===================== */
function updateCartUI() {
  const mobileBadge = document.getElementById("cartBadgeMobile");
  const desktopBadge = document.getElementById("cartBadgeDesktop");
  const cartList = document.getElementById("cartItems");
  const emptyMsg = document.getElementById("emptyCartMsg");
  const totalEl = document.getElementById("cartTotal");

  if (!cartList) return; // prevent errors if cart modal not on page

  cartList.innerHTML = "";

  if (cartItems.length === 0) {
    mobileBadge && (mobileBadge.innerText = 0);
    desktopBadge && (desktopBadge.innerText = 0);
    emptyMsg && emptyMsg.classList.remove("d-none");
    totalEl && (totalEl.innerText = "$0");
    return;
  }

  emptyMsg && emptyMsg.classList.add("d-none");

  let totalQty = 0;
  let totalPrice = 0;

  cartItems.forEach(item => {
    totalQty += item.qty;
    totalPrice += item.price * item.qty;

    cartList.innerHTML += `
      <li class="list-group-item d-flex align-items-center gap-3">
        <img src="${item.img}" width="50" class="rounded">

        <div class="flex-grow-1">
          <strong>${item.title}</strong><br>
          <small>$${item.price}</small>
        </div>

        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary qty-minus" data-id="${item.id}">−</button>
          <span>${item.qty}</span>
          <button class="btn btn-sm btn-outline-secondary qty-plus" data-id="${item.id}">+</button>
        </div>

        <button class="btn btn-sm btn-outline-danger remove-item" data-id="${item.id}">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    `;
  });

  mobileBadge && (mobileBadge.innerText = totalQty);
  desktopBadge && (desktopBadge.innerText = totalQty);
  totalEl && (totalEl.innerText = `$${totalPrice.toFixed(2)}`);
}

/* =====================
   PLUS / MINUS / DELETE
===================== */
document.addEventListener("click", function (e) {
  const id = e.target.dataset.id || e.target.closest(".remove-item")?.dataset.id;
  if (!id) return;

  const itemIndex = cartItems.findIndex(item => item.id == id);
  if (itemIndex === -1) return;

  const item = cartItems[itemIndex];

  // PLUS
  if (e.target.classList.contains("qty-plus")) {
    item.qty++;
    cartCount++;
  }

  // MINUS
  if (e.target.classList.contains("qty-minus")) {
    item.qty--;
    cartCount--;
    if (item.qty <= 0) {
      cartItems.splice(itemIndex, 1);
    }
  }

  // DELETE
  if (e.target.closest(".remove-item")) {
    cartCount -= item.qty;
    cartItems.splice(itemIndex, 1);
  }

  updateCartUI();
});

/* =====================
   OPEN CART MODAL
===================== */
document.addEventListener("click", function (e) {
  const cartBtn = e.target.closest(".open-cart");
  if (!cartBtn) return;

  e.preventDefault();
  const modalEl = document.getElementById("cartModal");
  if (!modalEl) return;

  new bootstrap.Modal(modalEl).show();
});

/* =====================
   PURCHASE
===================== */
document.addEventListener("click", function (e) {
  if (!e.target.matches("#purchaseBtn")) return;

  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.setItem("purchasedProducts", JSON.stringify(cartItems));
  alert("Product was bought successfully!");

  cartItems = [];
  cartCount = 0;
  updateCartUI();

  bootstrap.Modal.getInstance(document.getElementById("cartModal"))?.hide();
});
