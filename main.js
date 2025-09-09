document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Accordion
  document.querySelectorAll(".acc-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  // Cart
  const cart = [];
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} – €${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = `€${total}`;
  }

  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.product;
      const price = 24; // демо-цена
      cart.push({ name, price });
      renderCart();
    });
  });

  // Contact form
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  form.addEventListener("submit", e => {
    e.preventDefault();
    note.textContent = "Thanks! We'll reply to you soon.";
    form.reset();
  });
});
