const app = require('./app')
const mongoose = require('mongoose')

const PORT = 5000

const CONNECTION_URL = 'mongodb://localhost:27017/infinitescroll'

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log(`Connection is successful`)
  })
  .catch(() => {
    console.log(`Oops! Something went wrong!`)
  })

app.listen(PORT, () => {
  console.log(`App is listenig on port ${PORT}`)
})
