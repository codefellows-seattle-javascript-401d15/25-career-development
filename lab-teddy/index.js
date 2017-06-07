'use strict';

const Tree = require('./lib/tree');
const fs = require('fs');

fs.readFile(`${__dirname}/../assets/minimal.html`, (err, data) => {
  if(err) return console.error(err);
  let parseData = data.toString('');
  let dataSplit = parseData.split('<');
  let dataArray = [];
  dataSplit.forEach(line => {
    dataArray.push(removeUnneeded(line));
  });
  function removeUnneeded(line){
    return line.split('\n').join('').split('>');
  }
  console.log(dataArray);
});
