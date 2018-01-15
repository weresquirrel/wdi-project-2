const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res, next) {
  console.log('sessionsCreate');
  console.log(req.body.email);
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', { message: 'Unrecognised user' });
      }
      req.session.userId = user.id;
      req.user = user;
      req.flash('success', `Welcome back, ${user.username}!`);
      res.redirect('/index');
      req.flash('success', `Welcome back, ${user.username}!`);
    })
    .catch(next);
}


module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
