const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: "₹79,999"
  },
  {
    id: 2,
    name: "Nike Shoes",
    price: "₹2,999"
  }
];

app.get("/", (req, res) => {
  res.send("Klikkart Backend Running 🚀");
});

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

