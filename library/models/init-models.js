var DataTypes = require("sequelize").DataTypes;
var _aladin_category = require("./aladin_category");
var _user = require("./user");

function initModels(sequelize) {
  var aladin_category = _aladin_category(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    aladin_category,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
