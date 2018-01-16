const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const shortPosts = require('../controllers/shortPosts');
const secureRoute = require('../lib/secureRoute');

router
  .get('/', (req, res) => res.redirect('/index'));

router
  .get('/index', (req, res) => res.render('statics/index'))
  .post(secureRoute, shortPosts.create);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  // .get((req, res) => res.render('sessions/new'));
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/posts/short/new')
  .get(secureRoute, shortPosts.new);

router.route('/posts/short')
  .post(secureRoute, shortPosts.create);

module.exports = router;
