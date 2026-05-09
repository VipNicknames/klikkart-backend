const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
  res.json([
    {
      title: "Gaming Keyboard",
      price: "₹1999"
    },
    {
      title: "Gaming Mouse",
      price: "₹799"
    },
    {
      title: "PS5 Controller",
      price: "₹5999"
    }
  ]);
});

app.listen(3000, () => {
  console.log("Klikkart Server Running 🔥");
});
0

