const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router
  .get('/', (req, res) => res.render('statics/index'));

router
  .get('/index', (req, res) => res.render('statics/index'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  // .get((req, res) => res.render('sessions/new'));
  .get(sessions.new)
  .post(sessions.create);



module.exports = router;
