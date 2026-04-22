const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "T-Shirt", price: 299, category: "fashion" },
  { id: 2, name: "Shoes", price: 999, category: "fashion" },
  { id: 3, name: "Headphones", price: 799, category: "electronics" },
  { id: 4, name: "Smartphone", price: 14999, category: "electronics" }
];

let cart = [];

// Get products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add to cart
app.post("/cart", (req, res) => {
  const product = products.find(p => p.id === req.body.id);
  if (!product) return res.status(404).send("Not found");

  cart.push(product);
  res.json(cart);
});

// Get cart
app.get("/cart", (req, res) => {
  res.json(cart);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
