const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(__dirname));

const products = [
{
  name: "Gaming Mouse",
  price: "₹999",
  image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
},
{
  name: "Gaming Keyboard",
  price: "₹1999",
  image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
},
{
  name: "Gaming Headphone",
  price: "₹1499",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
}
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
