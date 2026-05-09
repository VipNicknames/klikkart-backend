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
    image: "https://i.imgur.com/8Km9tLL.jpg"
  },
  {
    name: "Gaming Keyboard",
    price: "₹1999",
    image: "https://i.imgur.com/27ZAHzq.jpg"
  },
  {
    name: "Gaming Headphone",
    price: "₹1499",
    image: "https://i.imgur.com/2DsA49b.jpg"
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
