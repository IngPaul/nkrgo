'use strict'
var mongoose = require('mongoose')
var variable = require('../../variable.json')
mongoose.connect('mongodb://localhost/nkrgo', (err, res) => {
  if (err)
    throw err
  else
    console.log('La base de datos esta corriendo...')
})
module.exports = mongoose
