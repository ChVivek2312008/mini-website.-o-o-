const products = [
  { id: 1, name: "T-Shirt", price: 299, category: "fashion" },
  { id: 2, name: "Sneakers", price: 999, category: "fashion" },
  { id: 3, name: "Headphones", price: 799, category: "electronics" },
  { id: 4, name: "Smart Watch", price: 1499, category: "electronics" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function render(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="add(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function add(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
}

function filter(cat) {
  if (cat === "all") return render(products);
  render(products.filter(p => p.category === cat));
}

document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  render(products.filter(p => p.name.toLowerCase().includes(val)));
});

render(products);
updateCart();
