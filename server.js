const express = require("express");
const mongoose = require("mongoose");
const pokemons = require("./views/models/pokemons");
const pokemonData = require("./views/models/pokemonData");

const app = express();
const port = 3002;

mongoose.connect(
  "mongodb+srv://alessandromordini:alessandro123@mordiville.28hcsqj.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Set the view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemonData: pokemonData });
});

app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
});
