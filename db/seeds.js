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
    description: 'Lorem ipsum dolor sit amet',
    pictures: [{url: 'https://images.unsplash.com/photo-1485277092938-6d17c5c88920?auto=format&fit=crop&w=1051&q=80', caption: 'My yellow chair'}]
  },{
    title: 'Door decor',
    description: 'Adipisicing elit',
    pictures: [{url: 'https://images.unsplash.com/photo-1512728657599-58bfaaa75696?auto=format&fit=crop&w=634&q=80', caption: 'door'}]
  }])
  .then((posts) => console.log(`${posts.length} posts created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
