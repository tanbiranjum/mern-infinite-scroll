const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  username: String,
  avatar: String,
  image: String,
  title: String,
  caption: String,
  created_at: Date,
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post
