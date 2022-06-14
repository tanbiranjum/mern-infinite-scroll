const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const postRouter = require('./routes/postRoute')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello world',
  })
})

app.use('/posts', postRouter)

module.exports = app
