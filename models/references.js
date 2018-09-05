//model for references table
module.exports = function(sequelize, DataTypes) {
  var References = sequelize.define("References", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  References.associate = function(models) {
    // We're saying that a References should belong to an User
    // A References can't be created without a User due to the foreign key constraint
    References.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return References;
};
