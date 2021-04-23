const express = require('express')
const { join } = require('path')

const app = express()

app.use(require('./routes'))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))