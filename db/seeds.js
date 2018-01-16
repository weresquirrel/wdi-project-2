const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Post = require('../models/post');
const User = require('../models/user');

Post.collection.drop();
User.collection.drop();

Post
  .create([{
    title: 'Repaint Finished!',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: 'Door decor',
    description: 'Adipisicing elit'
  }])
  .then((posts) => console.log(`${posts.length} posts created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
