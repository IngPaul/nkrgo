'use strict'
const express = require('express')
const bodyParser = require('body-parser') // eslint-disable-line 
const app = express()
const PORT = 5678
app.get('/', (req, res) => {
  res.send('Url Base!')
});
app.listen(PORT, () => {
  console.log('Hello World\n')
})
