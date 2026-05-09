const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(__dirname));

app.get("/products", async (req, res) => {
  try {

    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: "Products load nahi hue"
    });

  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running 🚀");
});
