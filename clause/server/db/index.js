const db = require('./database');
const Sequelize = require('sequelize');
const HashedMessages = require('./hashedMessages.model');

module.exports = {
  db,
  HashedMessages
};
