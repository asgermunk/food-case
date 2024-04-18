const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = process.env.PORT || 4000;

require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/foods", db.getFoods);
app.post("/insert-food", db.insertFood);
app.post("/populateFoods", db.populateFoods);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
