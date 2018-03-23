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
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'nestingbird',
    firstName: 'Agnes',
    surname: 'Smith',
    email: 'agnes@smith.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'dancing_octopus',
    firstName: 'Lucy',
    surname: 'Donno',
    email: 'lucy@do.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    username: 'Benny',
    firstName: 'Ben',
    surname: 'Moore',
    email: 'ben@m.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Post
      .create([{
        title: 'Repaint Finished!',
        description: 'Listicle vinyl hot chicken food truck blue bottle stumptown retro vice hashtag hexagon kombucha. Crucifix activated charcoal organic, flexitarian green juice biodiesel pour-over. Live-edge roof party hoodie, semiotics jean shorts pop-up chambray adaptogen biodiesel vexillologist selfies polaroid. Venmo williamsburg dreamcatcher, synth master cleanse chillwave messenger bag bushwick stumptown tofu cold-pressed.',
        pictures: [{url: 'https://images.unsplash.com/photo-1485277092938-6d17c5c88920?auto=format&fit=crop&w=1051&q=80', caption: 'My yellow chair'}],
        createdBy: users[0]._id,
        comments: [ {
          content: 'Fanny pack jianbing gochujang, before they sold out salvia mlkshk vaporware banh mi plaid leggings aesthetic. Dreamcatcher kogi 90\'s pabst gochujang.',
          createdBy: users[0]._id,
          createdAt: new Date(2017, 3, 11)
        }, {
          content: 'Prism migas raw denim meh, YOLO street art thundercats try-hard!!!',
          createdBy: users[1]._id,
          createdAt: new Date(2017, 5, 24)
        }, {
          content: 'Actually flannel pork belly direct trade, health goth hell of lyft coloring book letterpress wolf gentrify authentic. Occupy franzen brooklyn DIY.',
          createdBy: users[0]._id,
          createdAt: new Date(2017, 5, 26)
        } ]
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
        createdBy: users[0]._id,
        comments: [ {
          content: 'Lorem ipsum dolor sit amet',
          createdBy: users[2]._id,
          createdAt: new Date(2017, 10, 21)
        }, {
          content: 'Hashtag etsy bushwick vegan williamsburg pinterest cred migas tote bag pabst 3 wolf moon fashion axe narwhal. Master cleanse marfa ethical, retro unicorn microdosing migas gluten-free poutine mlkshk tattooed.',
          createdBy: users[1]._id,
          createdAt: new Date(2017, 10, 22)
        }, {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdBy: users[3]._id,
          createdAt: new Date(2017, 10, 24)
        }, {
          content: 'Prism migas raw denim meh, YOLO street art thundercats try-hard!!!',
          createdBy: users[0]._id,
          createdAt: new Date(2017, 10, 27)
        }, {
          content: 'Actually flannel pork belly direct trade, health goth hell of lyft coloring book letterpress wolf gentrify authentic. Occupy franzen brooklyn DIY.',
          createdBy: users[1]._id,
          createdAt: new Date(2017, 11, 2)
        }, {
          content: 'Chillwave viral disrupt activated charcoal pinterest edison bulb, mixtape ramps helvetica iPhone you probably haven\'t heard of them tacos whatever fanny pack food truck. ',
          createdBy: users[3]._id,
          createdAt: new Date(2017, 11, 4)
        } ]
      },{
        title: 'Mini garden',
        description: 'Jianbing glossier echo park pok pok palo santo yuccie man braid everyday carry beard crucifix art party hammock before they sold out. Disrupt distillery affogato stumptown roof party, post-ironic fixie direct trade heirloom cred af ethical forage synth. Cliche photo booth sartorial, humblebrag vegan bicycle rights vice unicorn leggings 90\'s stumptown hell of snackwave cred. Hashtag fanny pack plaid meggings lomo mumblecore.',
        pictures: [{url: 'https://images.unsplash.com/photo-1417036631532-ae3fc6ce32f2?auto=format&fit=crop&w=1050&q=80', caption: 'Step 1'},
          {url: 'https://images.unsplash.com/photo-1417037129170-06a2750eaa47?auto=format&fit=crop&w=1050&q=80', caption: 'Step 2'}],
        createdBy: users[1]._id,
        comments: [ {
          content: 'Master cleanse marfa ethical, retro unicorn microdosing migas gluten-free poutine mlkshk tattooed.',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 2, 11)
        }, {
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdBy: users[1]._id,
          createdAt: new Date(2018, 2, 13)
        }, {
          content: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 2, 16)
        }, {
          content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?',
          createdBy: users[0]._id,
          createdAt: new Date(2018, 2, 17)
        }, {
          content: 'Actually flannel pork belly direct trade, health goth hell of lyft coloring book letterpress wolf gentrify authentic. Occupy franzen brooklyn DIY.',
          createdBy: users[1]._id,
          createdAt: new Date(2018, 2, 18)
        }, {
          content: 'Chillwave viral disrupt activated charcoal pinterest edison bulb, mixtape ramps helvetica iPhone you probably haven\'t heard of them tacos whatever fanny pack food truck. ',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 2, 19)
        }, {
          content: 'Lorem ipsum dolor sit amet',
          createdBy: users[2]._id,
          createdAt: new Date(2018, 2, 22)
        }, {
          content: 'Hashtag etsy bushwick vegan williamsburg pinterest cred migas tote bag pabst 3 wolf moon fashion axe narwhal. Master cleanse marfa ethical, retro unicorn microdosing migas gluten-free poutine mlkshk tattooed.',
          createdBy: users[1]._id,
          createdAt: new Date(2018, 2, 25)
        }, {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 2, 27)
        }, {
          content: 'Prism migas raw denim meh, YOLO street art thundercats try-hard!!!',
          createdBy: users[0]._id,
          createdAt: new Date(2018, 2, 28)
        }, {
          content: 'Lorem ipsum dolor sit amet',
          createdBy: users[2]._id,
          createdAt: new Date(2018, 2, 30)
        }, {
          content: 'Hashtag etsy bushwick vegan williamsburg pinterest cred migas tote bag pabst 3 wolf moon fashion :P',
          createdBy: users[1]._id,
          createdAt: new Date(2018, 3, 1)
        }, {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 3, 3)
        }, {
          content: 'Prism migas raw denim meh, YOLO street art thundercats try-hard!!!',
          createdBy: users[0]._id,
          createdAt: new Date(2018, 3, 5)
        } ]
      }, {
        title: 'A Neverending Story',
        description: 'Organic wolf portland hashtag la croix stumptown, mixtape craft beer hexagon swag actually vexillologist fingerstache. Blog biodiesel cardigan, fam coloring book umami you probably haven\'t heard of them distillery. Twee farm-to-table taiyaki poke dreamcatcher affogato YOLO church-key DIY brooklyn fanny pack cliche ennui. Dreamcatcher typewriter ugh lomo. Cornhole chartreuse kickstarter hella, synth snackwave chia.',
        pictures: [{url: 'https://images.unsplash.com/photo-1466027449668-27f96b692ba4?auto=format&fit=crop&w=1952&q=80', caption: 'You\'ll need lot of patience'}],
        createdBy: users[0]._id,
        comments: [ {
          content: 'Hashtag etsy bushwick vegan williamsburg pinterest cred migas tote bag pabst 3 wolf moon fashion axe narwhal. Master cleanse marfa ethical, retro unicorn microdosing migas gluten-free poutine mlkshk tattooed.',
          createdBy: users[0]._id,
          createdAt: new Date(2017, 11, 28)
        }, {
          content: 'Consectetur adipisicing elit, sed do eiusmod tempor!',
          createdBy: users[1]._id,
          createdAt: new Date(2017, 11, 29)
        }, {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 0, 7)
        }, {
          content: 'Prism migas raw denim meh, YOLO street art thundercats try-hard!!!',
          createdBy: users[0]._id,
          createdAt: new Date(2018, 0, 8)
        }, {
          content: 'Actually flannel pork belly direct trade, health goth hell of lyft coloring book letterpress wolf gentrify authentic. Occupy franzen brooklyn DIY.',
          createdBy: users[1]._id,
          createdAt: new Date(2018, 0, 8)
        }, {
          content: 'Chillwave viral disrupt activated charcoal pinterest edison bulb, mixtape ramps helvetica iPhone you probably haven\'t heard of them tacos whatever fanny pack food truck. ',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 0, 11)
        }, {
          content: 'Lorem ipsum dolor sit amet',
          createdBy: users[2]._id,
          createdAt: new Date(2018, 0, 14)
        }, {
          content: 'Hashtag etsy bushwick vegan williamsburg pinterest cred migas tote bag pabst 3 wolf moon fashion axe narwhal. Master cleanse marfa ethical, retro unicorn microdosing migas gluten-free poutine mlkshk tattooed.',
          createdBy: users[1]._id,
          createdAt: new Date(2018, 0, 19)
        }, {
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdBy: users[3]._id,
          createdAt: new Date(2018, 0, 21)
        }, {
          content: 'Prism migas raw denim meh, YOLO street art thundercats try-hard!!!',
          createdBy: users[0]._id,
          createdAt: new Date(2018, 0, 23)
        } ]
      } ]);
  })
  .then((posts) => {
    console.log(`${posts.length} posts created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
