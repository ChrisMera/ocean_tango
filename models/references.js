//model for references table
module.exports = function(sequelize, DataTypes) {
        var References = sequelize.define("References", {
          name: {type: DataTypes.STRING, 
                  allowNull: false},
          phone: {type: DataTypes.INTEGER,
                  allowNull: false}, 
          relationship: {type: DataTypes.STRING,
                          allowNull: false}
        });
        return References;
      };