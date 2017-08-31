'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  campus_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  planet_image: {
    type: Sequelize.STRING,
    allowNull: true
  }
});