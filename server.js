const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const toysRoute = require("./routes/Toys.js")
const categoriesRoute = require("./routes/Categories.js")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use("/toys", toysRoute)
app.use("/categories", categoriesRoute)

app.listen(3000, () => {
    console.log('localhost:3000');
});