const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  title: String,
  tags: String,
  description: String,
  code: String,
})

module.exports = mongoose.model('Note', NoteSchema)