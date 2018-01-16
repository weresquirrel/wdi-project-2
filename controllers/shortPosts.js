const Post = require('../models/post');

function shortPostsNew(req, res) {
  res.render('posts/shorts/new');
}

function shortPostsCreate(req, res, next) {
  req.body.pictures = JSON.parse(req.body.pictures);
  req.body.createdBy = req.user;

  


  // req.body.createdBy = req.user;
  // console.log(req.body.createdBy);
  // Post
  //   .create(req.body)
  //   .then(() => res.redirect('/index'))
  //   .next();

}




module.exports = {
  new: shortPostsNew,
  create: shortPostsCreate
  // delete:
};
