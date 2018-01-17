const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const shortPosts = require('../controllers/shortPosts');
const secureRoute = require('../lib/secureRoute');

router
  .get('/', (req, res) => res.redirect('/index'));

router.route('/index')
  .get(shortPosts.index);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/posts/short')
  .post(secureRoute, shortPosts.create);

router.route('/posts/short/new')
  .get(secureRoute, shortPosts.new);

router.route('/posts/shorts/:id')
  .get(shortPosts.show)
  .put(secureRoute, shortPosts.update)
  .delete(secureRoute, shortPosts.delete);

router.route('/posts/shorts/:id/edit')
  .get(secureRoute, shortPosts.edit);

router.route('/posts/shorts/:id/comments')
  .post(shortPosts.createComment);

router.route('/posts/shorts/:id/comments/:commentId')
  .delete(shortPosts.deleteComment);


module.exports = router;
