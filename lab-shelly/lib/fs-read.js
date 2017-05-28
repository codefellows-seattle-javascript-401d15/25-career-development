'use strict';

const fs = require('fs');

const readHTML = module.exports = function(file, callback) {

  fs.readFile(file, function(err, data) {

    if(err) throw (err);
    let newData = data.toString().split('\n');
    newData.shift();

    newData = newData.map(function(i) {
      return i.trim();
    });

    callback(null, newData);
  });
};