const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

app.get('/status', (req, res) => {
  res.send('Hey there')
})

console.log('app.js says: hello world, I am listening')
