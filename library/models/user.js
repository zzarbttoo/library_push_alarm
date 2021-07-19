const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    USERNUM: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    USER_EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    USER_PHONE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    USER_LIBRARY_LIST: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USERNUM" },
        ]
      },
    ]
  });
};
