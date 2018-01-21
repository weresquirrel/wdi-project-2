const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Post = require('../models/post');
const User = require('../models/user');

Post.collection.drop();
User.collection.drop();

User
  .create([{
    username: 'Decor_Guru',
    firstName: 'Suzanne',
    surname: 'Smith',
    email: 'suzie@smith.com',
    password: 'qwertyuiopasdfghjkl',
    passwordConfirmation: 'qwertyuiopasdfghjkl'
  },{
    username: 'nestingbird',
    firstName: 'Agnes',
    surname: 'Smith',
    email: 'agnes@smith.com',
    password: 'lkjhgfdsapoiuytrewq',
    passwordConfirmation: 'lkjhgfdsapoiuytrewq'
  }])
  .then((users) => {
    console.log(users);
    console.log(`${users.length} users created`);
    return Post
      .create([{
        title: 'Repaint Finished!',
        description: 'Listicle vinyl hot chicken food truck blue bottle stumptown retro vice hashtag hexagon kombucha. Crucifix activated charcoal organic, flexitarian green juice biodiesel pour-over. Live-edge roof party hoodie, semiotics jean shorts pop-up chambray adaptogen biodiesel vexillologist selfies polaroid. Venmo williamsburg dreamcatcher, synth master cleanse chillwave messenger bag bushwick stumptown tofu cold-pressed.',
        pictures: [{url: 'https://images.unsplash.com/photo-1485277092938-6d17c5c88920?auto=format&fit=crop&w=1051&q=80', caption: 'My yellow chair'}],
        createdBy: users[0]._id
      },{
        title: 'Dessert in pink',
        description: 'Pork belly wayfarers hoodie tofu flannel vexillologist adaptogen put a bird on it cold-pressed. Franzen direct trade four loko intelligentsia disrupt VHS. Tumblr cardigan etsy craft beer sustainable, normcore brunch stumptown hoodie tousled live-edge franzen unicorn. Poutine hell of fingerstache swag unicorn messenger bag.',
        pictures: [{url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=806&q=80', caption: 'Yummy!'}],
        createdBy: users[1]._id
      },{
        title: 'Door decor',
        description: 'Listicle vinyl hot chicken food truck blue bottle stumptown retro vice hashtag hexagon kombucha. Crucifix activated charcoal organic, flexitarian green juice biodiesel pour-over. Live-edge roof party hoodie, semiotics jean shorts pop-up chambray adaptogen biodiesel vexillologist selfies polaroid. Venmo williamsburg dreamcatcher, synth master cleanse chillwave messenger bag bushwick stumptown tofu cold-pressed.',
        pictures: [{url: 'https://images.unsplash.com/photo-1512331283953-19967202267a?auto=format&fit=crop&w=1000&q=80', caption: 'Step 1'},
          {url: 'https://images.unsplash.com/photo-1512728657599-58bfaaa75696?auto=format&fit=crop&w=634&q=80', caption: 'Step 2'}],
        createdBy: users[0]._id
      },{
        title: 'Mini garden',
        description: 'Jianbing glossier echo park pok pok palo santo yuccie man braid everyday carry beard crucifix art party hammock before they sold out. Disrupt distillery affogato stumptown roof party, post-ironic fixie direct trade heirloom cred af ethical forage synth. Cliche photo booth sartorial, humblebrag vegan bicycle rights vice unicorn leggings 90\'s stumptown hell of snackwave cred. Hashtag fanny pack plaid meggings lomo mumblecore.',
        pictures: [{url: 'https://images.unsplash.com/photo-1417036631532-ae3fc6ce32f2?auto=format&fit=crop&w=1050&q=80', caption: 'Step 1'},
          {url: 'https://images.unsplash.com/photo-1417037129170-06a2750eaa47?auto=format&fit=crop&w=1050&q=80', caption: 'Step 2'}],
        createdBy: users[1]._id
      }, {
        title: 'A Neverending Story',
        description: 'Organic wolf portland hashtag la croix stumptown, mixtape craft beer hexagon swag actually vexillologist fingerstache. Blog biodiesel cardigan, fam coloring book umami you probably haven\'t heard of them distillery. Twee farm-to-table taiyaki poke dreamcatcher affogato YOLO church-key DIY brooklyn fanny pack cliche ennui. Dreamcatcher typewriter ugh lomo. Cornhole chartreuse kickstarter hella, synth snackwave chia.',
        pictures: [{url: 'https://images.unsplash.com/photo-1466027449668-27f96b692ba4?auto=format&fit=crop&w=1952&q=80', caption: 'You\'ll need lot of patience'}],
        createdBy: users[0]._id
      } ]);
  })
  .then((posts) => {
    console.log(`${posts.length} posts created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
