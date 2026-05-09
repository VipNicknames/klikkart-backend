const express = require("express");
const app = express();

const products = [
  {
    name: "Gaming Mouse",
    price: 999,
    image: "https://i.imgur.com/8Km9tLL.jpg"
  },
  {
    name: "Gaming Keyboard",
    price: 1999,
    image: "https://i.imgur.com/Z7AzH2c.jpg"
  },
  {
    name: "Gaming Headphone",
    price: 1499,
    image: "https://i.imgur.com/2DsA49b.jpg"
  }
];

app.get("/", (req, res) => {
  res.send("Klikkart Backend Running 🚀");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log("Server running");
});

