const Post = require('../models/post');

function shortPostsNew(req, res) {
  res.render('posts/shorts/new');
}






module.exports = {
  new: shortPostsNew
  // create:
  // delete:
};
