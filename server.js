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

console.log(data);

res.json(data);

} catch (error) {

console.log(error);

res.json([
{
title:"Gaming Mouse",
price:999,
description:"RGB Gaming Mouse",
image:"https://images.unsplash.com/photo-1527814050087-3793815479db"
},
{
title:"Gaming Keyboard",
price:1999,
description:"Mechanical Keyboard",
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
}
]);

}

});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running 🚀");
});
