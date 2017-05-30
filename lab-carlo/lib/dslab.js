'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/../../assets/minimal.html`,'utf-8', function (err, data) {
  if (err) throw err;
  let minString = data.toString();
  // console.log(minString);
  let minStringSplit = minString.split('<');
  // let mapString = minStringSplit.map();
  // let minStringTrim = minStringSplit.trim();
  console.log(minStringSplit);
});
