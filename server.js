const express = require("express");
const parser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use(express.static("public"));

var exhb = require("express-handlebars");

app.engine("handlebars", exhb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("Burger Joint listening on PORT: " + PORT);
    }).catch(function () {
        console.log("Error 404");
    });
});
