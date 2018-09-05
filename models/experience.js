module.exports = function(sequelize, DataTypes) {
  var Experience = sequelize.define("Experience", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: DataTypes.DATEONLY,
    asscSkills: {
      type: DataTypes.STRING
    },
    expType: DataTypes.STRING,
    selected: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });
  Experience.associate = function(models) {
    // We're saying that a Experience should belong to an User
    // A Experience can't be created without a User due to the foreign key constraint
    Experience.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Experience;
};
