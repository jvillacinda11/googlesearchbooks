const { model, Schema } = require('mongoose')

const Books = new Schema({
  title: String,
  authors: [{
    type: String
  }],
  description: String,
  image: String,
  link: String
})
module.exports = model('Books', Books)