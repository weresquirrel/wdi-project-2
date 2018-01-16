const ShortPost = require('../models/post');

function shortPostsNew(req, res) {
  res.render('posts/shorts/new');
}


function shortPostsIndex(req, res, next) {
  ShortPost
    .find()
    .exec()
    .then((shortPosts) => res.render('statics/index', { shortPosts }))
    .catch(next);
}

function shortPostsCreate(req, res, next) {
  req.body.pictures = JSON.parse(req.body.pictures);
  req.body.createdBy = req.user;
  ShortPost
    .create(req.body)
    .then(() => res.redirect('/index'));
}




module.exports = {
  new: shortPostsNew,
  create: shortPostsCreate,
  index: shortPostsIndex
  // delete:
};
