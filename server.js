'use strict'
const express = require('express')
const bodyParser = require('body-parser') // eslint-disable-line 
const app = express()
const PORT = 5678
app.listen(PORT, () => {
  console.log('Servidor corriendo')
  console.log('babel')
})
