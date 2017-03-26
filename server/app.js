const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const cors = require('cors')
const app = express()

let index = require('./routers/index')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)

app.listen(3000)
