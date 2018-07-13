const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8089)
console.log(`app.js says: hello world, I am listening on port 8089`)

require('./routes')(app)

const mongoose = require('mongoose')
// create a connection with a db called posts
mongoose.connect('mongodb://localhost:27017/posts')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connections error'))
db.once('open', function(callback){
  console.log('connection succeeded')
})
