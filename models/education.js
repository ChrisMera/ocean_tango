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
  return Education;
};
