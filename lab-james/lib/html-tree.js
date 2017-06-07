'use strict';

const fs = require('fs');
require('./node-module.js');

let dataString;

fs.readFile(`${__dirname}/../../assets/minimal.html`, 'utf-8', function(err, data) {
  if(err) throw err;

  dataString = data.toString();

  console.log(dataString.split(/[^/<(a-z)>]/).join(''));
  return dataString;
});
