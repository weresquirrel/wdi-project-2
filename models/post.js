// 2 type of post-models (ideally, but min. 1),
// picture model - embeded into the post
// comment model - embeded into the post(s)
const mongoose = require('mongoose');

// const picturesSchema = new mongoose.Schema({
//   picture: { type: String  },
//   caption: { type: String  }
// });

const shortPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pictures: [{}],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
});


shortPostSchema.methods.belongsTo = function belongsTo(user) {
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('ShortPost', shortPostSchema);
