const User = require('../models/user');

function newRoute(req, res) {
  return res.render('registrations/new');
}

function createRoute(req, res, next) {
  console.log('in createRoute', req.body);

  User
    .create(req.body)
    .then(() => res.redirect('/login'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match' });
      }
      // res.status(500).send(err);
      next(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
