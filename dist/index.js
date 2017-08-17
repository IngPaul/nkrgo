'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyParser = require('body-parser'); // eslint-disable-line 
var app = (0, _express2.default)();
var PORT = 5678;
app.get('/', function (req, res) {
  res.send('Url Base!');
});
app.listen(PORT, function () {
  console.log('Servidor Activo\n');
});