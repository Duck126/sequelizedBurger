var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.burger.findAll({}).then(function (myBurgers) {
            var burgershb = {
                burgers: myBurgers
            };
            res.render("index", burgershb);
        });
    }),

        app.post("/api/burgers", function (req, res) {
            db.burger.create({
                burger_name: req.body.burger_name,
                devoured: req.body.devoured
            }).then(function (myBurger) {
                res.json(myBurger);
            });
        }),

        app.put("/api/burgers/:id", function (req, res) {
            db.burger.update(req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (burgerUpdate) {
                res.json(burgerUpdate);
            });
        }),

        app.delete("/api/burgers/:id", function (req, res) {
            db.burger.destroy({
                where: {
                    id: req.body.id
                }
            }).then(function (deletedBurger) {
                res.json(deletedBurger);
            });
        });
};



