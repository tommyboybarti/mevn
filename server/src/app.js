const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

const mongoose = require('mongoose')
// create a connection with a db called posts
mongoose.connect('mongodb://localhost:27017/posts')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connections error'))
db.once('open', function(callback){
  console.log('connection succeeded')
})

const Post = require('../models/post')
// Add new post
app.post('/posts', (req, res) => {
  const db = req.db
  const title = req.body.title
  const description = req.body.description
  const code = req.body.code
  const newPost = new Post({
    title: title,
    description: description,
    code: code
  })
  newPost.save(function (err) {
    if (err) {
      console.log(err)
    }
    res.send({
      success: true,
      message: 'Post saved successfully'
    })
  })
})

app.get('/posts', (req, res) => {
  // need to specify what key-value pairs are shown in ''
  Post.find({}, 'title description code', function (err, posts) {
    if (err) {
      console.error(err)
    }
    res.send({
      posts: posts,
    })
  }).sort({_id:-1})
})

console.log('app.js says: hello world, I am listening')
