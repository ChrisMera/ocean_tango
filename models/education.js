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
    endDate: DataTypes.DATEONLY,
    selected: {
      type: DataTypes.BOOLEAN,
      default: false
    }
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
  Education.associate = function(models) {
    // We're saying that a Education should belong to an User
    // A education can't be created without a User due to the foreign key constraint
    Education.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    ///YOU ARE HERE+++++
    // .hasMany(models.Project, {
    //   as: "collaboratorId",
    //   foreignKey: "collaboratorId"
    // });
    // User.hasMany(models.Project, {
    //   as: "ownerId",
    //   foreignKey: "ownerId"
    // });
    // User.hasMany(models.Messages, {
    //   onDelete: "cascade"
    // });
    // User.hasMany(models.Skill, {
    //   onDelete: "cascade"
    // });
  };
  return Education;
};
