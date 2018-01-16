const Post = require('../models/post');

function shortPostsNew(req, res) {
  res.render('posts/shorts/new');
}


function shortPostsIndex(req, res, next) {
  Post
    .find()
    .exec()
    .then((posts) => res.render('statics/index', { posts }))
    .catch(next);
}

function shortPostsCreate(req, res, next) {
  req.body.pictures = JSON.parse(req.body.pictures);
  req.body.createdBy = req.user;
  Post
    .create(req.body)
    .then(() => res.redirect('/index'));
}




module.exports = {
  new: shortPostsNew,
  create: shortPostsCreate,
  index: shortPostsIndex
  // delete:
};
