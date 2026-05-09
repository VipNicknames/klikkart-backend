const express = require("express");
const cors = require("cors");
const products = require("./products.json");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send("Klikkart Backend Running 🚀");
});

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
