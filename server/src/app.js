const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

