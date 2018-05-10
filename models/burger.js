module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burgers", {
        burger_name: {
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return burger;
}

