const Post = require('../models/post')

module.exports = (app) => {
  // Add new post
  app.post('/posts', (req, res) => {
    const db = req.db
    const title = req.body.title
    const format = req.body.format
    const tags = req.body.tags
    const description = req.body.description
    const code = req.body.code
    const newPost = new Post({
      title: title,
      tags: tags,
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
    Post.find({}, 'title format tags description code', function (err, posts) {
      if (err) {
        console.error(err)
      }
      res.send({
        posts: posts,
      })
    }).sort({_id:-1})
  })
  app.get('/post/:id', (req, res) => {
    const db = req.db
    Post.findById(req.params.id, 'title format tags description code', function (err, post) {
      if (err) {
        console.error(err)
      }
      res.send(post)
    })
  })
  app.put('/posts/edit/:id', (req, res) => {
    const db = req.db
    Post.findById(req.params.id, 'title format tags description code', function (err, post) {
      if (err) {
        console.error(err)
      }
      post.title = req.body.title
      post.format = req.body.format
      post.tags = req.body.tags
      post.description = req.body.description
      post.code = req.body.code
      post.save(function(err) {
        if (err) {
          console.log(err)
        }
        res.send({
          success: true
        })
      })
    })
  })
  app.delete('/posts/:id', (req, res) => {
    const db = req.db
    Post.remove({
      _id: req.params.id
    }, function(err, post){
      if (err) {
        res.send(err)
      }
      res.send({
        success: true,
        message: 'Successfully deleted'
      })
    })
  })
}