const mongoose = require('../../db/connection');

const {Schema} = mongoose;

const Post = mongoose.model(

  'Post',

  new Schema({
    text: {
      type: String,
      required: true,
    },
  }, {timestamps: true}),
)

module.exports = Post;