module.exports = function(sequelize, DataTypes) {
    var Experience = sequelize.define("Experience", {
      name: {type: DataTypes.STRING,
              allowNull: false},
      role: {type: DataTypes.STRING,
          allowNull: false},
      description: {type: DataTypes.TEXT,
                  allowNull: false}, 
      startDate: {type: DataTypes.DATEONLY,
                  allowNull: false},
      endDate: DataTypes.DATEONLY,
      asscSkills: {type: DataTypes.STRING},
      expType: DataTypes.STRING
    });
    return Experience;
  };