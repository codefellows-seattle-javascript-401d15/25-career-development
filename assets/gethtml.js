'use strict';

const fs = require('fs');

let parsedData = [];

fs.readFile('./minimal.html', 'utf8', function(err, data){
  if(err) throw err;
  console.log(data.toString());
  let myData = data.toString()
  let stringData = JSON.stringify(myData)
  let parsed = JSON.parse(stringData)

  parsedData.push(parsed);
  console.log('this is the ', parsed);
});
