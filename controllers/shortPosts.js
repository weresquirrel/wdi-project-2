const ShortPost = require('../models/post');

function shortPostsNew(req, res) {
  res.render('posts/shorts/new');
}

function shortPostsIndex(req, res, next) {
  ShortPost
    .find()
    .populate('createdBy')
    .exec()
    .then((shortPosts) => {
      res.render('statics/index', { shortPosts });

    })
    .catch(next);
}

function shortPostsCreate(req, res, next) {
  if(req.body.pictures.length !== 0 ) {
    req.body.pictures = JSON.parse(req.body.pictures);
  }
  req.body.createdBy = req.user;
  ShortPost
    .create(req.body)
    .then(() => res.redirect('/index'))
    .catch(next);
}

function shortPostsShow(req, res, next) {
  ShortPost
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((shortPost) => {
      console.log(shortPost);
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
  if (req.body.pictures) {
    req.body.pictures = JSON.parse(req.body.pictures);
  }

  ShortPost
    .findById(req.params.id)
    .exec()
    .then((shortPost) => {

      shortPost = Object.assign(shortPost, req.body);

      return shortPost.save();

    })
    .then(() => res.redirect(`/posts/shorts/${req.params.id}`))
    .catch(next);
}

// /posts/shorts/:id
function createComment(req, res, next) {
  req.body.createdBy = req.user;

  ShortPost
    .findById(req.params.id)
    .exec()
    .then((shortPost) => {
      shortPost.comments.push(req.body);
      return shortPost.save();
    })
    .then(() => res.redirect(`/posts/shorts/${req.params.id}`))
    .catch(next);
}

function deleteComment(req, res, next) {
  ShortPost
    .findById(req.params.id)
    .exec()
    .then((shortPost) => {
      const comment = shortPost.comments.id(req.params.commentId);
      comment.remove();
      return shortPost.save();
    })
    .then(() => res.redirect(`/posts/shorts/${req.params.id}`))
    .catch(next);
}



module.exports = {
  new: shortPostsNew,
  create: shortPostsCreate,
  index: shortPostsIndex,
  show: shortPostsShow,
  delete: shortPostsDelete,
  edit: shortPostsEdit,
  update: shortPostsUpdate,
  createComment: createComment,
  deleteComment: deleteComment
};
