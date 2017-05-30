'use strict';

const fs = require('fs');

let htmlDoc;

fs.readFile(`${__dirname}/../../assets/minimal.html`, 'utf-8', function(err, data){
  if(err) throw err;
  htmlDoc = data.toString();
  console.log(data);
});
