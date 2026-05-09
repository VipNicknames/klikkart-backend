const express = require("express");
const cors = require("cors");
const products = require("./products.json");

const app = express();

app.use(cors());
app.use(express.static(__dirname));

app.get("/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
