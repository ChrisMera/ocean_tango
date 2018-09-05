//model for education table
module.exports = function(sequelize, DataTypes) {
  var Education = sequelize.define("Education", {
    school: {
      type: DataTypes.STRING,
      allowNull: false
    },
    degree: { type: DataTypes.STRING },
    startDate: {
      type: DataTypes.DATEONLY
    },
    endDate: DataTypes.DATEONLY
  });
  Education.associate = function(models) {
    // We're saying that a Education should belong to an User
    // A education can't be created without a User due to the foreign key constraint
    Education.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Education;
};
