'use strict';

const fs = require('fs');

module.exports = function() {
  let htmlDocString = [];

  fs.readFile(`${__dirname}/assets/minimal.html`, 'utf-8', function(err, data) {
    if(err) throw err;

    let htmlBuffer = data.toString();
    let splitBuffer = htmlBuffer.split('<');
    htmlDocString.push(splitBuffer);
    console.log(splitBuffer);
  });
  return htmlDocString;
};
module.exports();
