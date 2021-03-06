const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  format: String,
  tags: String,
  description: String,
})

module.exports = mongoose.model('Post', PostSchema)