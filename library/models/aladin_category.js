const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aladin_category', {
    CID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CATEGORY_NAME: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    MOL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    '1Depth': {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    '2Depth': {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    '3Depth': {
      type: DataTypes.STRING(23),
      allowNull: true
    },
    '4Depth': {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    '5Depth': {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aladin_category',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CID" },
        ]
      },
    ]
  });
};
