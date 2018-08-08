const Post = require('../models/post')
const Note = require('../models/note')

module.exports = (app) => {
  // Add new post
  app.post('/posts', (req, res) => {
    const db = req.db
    const title = req.body.title
    const format = req.body.format
    const tags = req.body.tags
    const description = req.body.description
    const newPost = new Post({
      title: title,
      format: format,
      tags: tags,
      description: description,
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
    Post.find({}, 'title format tags description', function (err, posts) {
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
    Post.findById(req.params.id, 'title format tags description', function (err, post) {
      if (err) {
        console.error(err)
      }
      res.send(post)
    })
  })
  app.put('/posts/edit/:id', (req, res) => {
    const db = req.db
    Post.findById(req.params.id, 'title format tags description', function (err, post) {
      if (err) {
        console.error(err)
      }
      post.title = req.body.title
      post.format = req.body.format
      post.tags = req.body.tags
      post.description = req.body.description
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
  app.post('/notes', (req, res) => {
    const db = req.db
    const title = req.body.title
    const format = req.body.format
    const tags = req.body.tags
    const description = req.body.description
    const code = req.body.code
    const newNote = new Note({
      title: title,
      format: format,
      tags: tags,
      description: description,
      code: code
    })
    newNote.save(function (err) {
      if (err) {
        console.log(err)
      }
      res.send({
        success: true,
        message: 'Post saved successfully'
      })
    })
  })
  app.get('/notes', (req, res) => {
    // need to specify what key-value pairs are shown in ''
    Note.find({}, 'title format tags description code', function (err, notes) {
      if (err) {
        console.error(err)
      }
      res.send({
        notes: notes,
      })
    }).sort({_id:-1})
  })
  // check route! it's /note (singular not notes..)
  app.get('/note/:id', (req, res) => {
    const db = req.db
    Note.findById(req.params.id, 'title format tags description code', function (err, note) {
      if (err) {
        console.error(err)
      }
      res.send(note)
    })
  })
  app.put('/notes/edit/:id', (req, res) => {
    const db = req.db
    Note.findById(req.params.id, 'title format tags description code', function (err, note) {
      if (err) {
        console.error(err)
      }
      note.title = req.body.title
      note.format = req.body.format
      note.tags = req.body.tags
      note.description = req.body.description
      note.code = req.body.code
      note.save(function(err) {
        if (err) {
          console.log(err)
        }
        res.send({
          success: true
        })
      })
    })
  })
  app.delete('/notes/:id', (req, res) => {
    const db = req.db
    Note.remove({
      _id: req.params.id
    }, function(err, note){
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