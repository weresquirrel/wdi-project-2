const ShortPost = require('../models/post');

function shortPostsNew(req, res) {
  res.render('posts/shorts/new');
}

function shortPostsIndex(req, res, next) {
  ShortPost
    .find()
    .exec()
    .then((shortPosts) => {
      res.render('statics/index', { shortPosts });

    })
    .catch(next);
}

function shortPostsCreate(req, res, next) {
  req.body.pictures = JSON.parse(req.body.pictures);
  req.body.createdBy = req.user;
  ShortPost
    .create(req.body)
    .then(() => res.redirect('/index'))
    .catch(next);
}

function shortPostsShow(req, res, next) {
  ShortPost
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((shortPost) => {
      return res.render('posts/shorts/show', { shortPost });
    })
    .catch(next);
}

function shortPostsDelete(req, res, next) {
  ShortPost
    .findById(req.params.id)
    .exec()
    .then((shortPost) => {

      return shortPost.remove();
    })
    .then(() => res.redirect('/'))
    .catch(next);
}

function shortPostsEdit(req, res, next) {
  ShortPost
    .findById(req.params.id)
    .exec()
    .then((shortPost) => {

      return res.render('posts/shorts/edit', { shortPost });
    })
    .catch(next);
}

function shortPostsUpdate(req, res, next) {
  console.log('up to update');
  ShortPost
    .findById(req.params.id)
    .exec()
    .then((shortPost) => {
      shortPost = Object.assign(shortPost, req.body);
      return shortPost.save();

    })
    .then(() => res.redirect(`../shorts/${req.params.id}`))
    .catch(next);
}



// /posts/shorts/:id

module.exports = {
  new: shortPostsNew,
  create: shortPostsCreate,
  index: shortPostsIndex,
  show: shortPostsShow,
  delete: shortPostsDelete,
  edit: shortPostsEdit,
  update: shortPostsUpdate
};
