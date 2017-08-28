'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('terra-campus', {
  campus_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  students: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  }
});