const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/murderHornets-the-door'

mongoose
  .connect(MONGODB_URI, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Murder Hornets are successfully connected to MongoDB.'))
  .catch(e => console.error('Connection error', e.message))
  
  module.exports = mongoose.connection