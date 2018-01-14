const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res, next) {
  console.log('sessionsCreate');
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
