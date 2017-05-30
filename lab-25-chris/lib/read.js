'use strict';

const Tree = require('./lib/tree.js');
// const Promise = require('bluebird');
const fs = require('fs');
let htmlTree = new Tree();
let result;

fs.readFile('./assets/minimal.html', 'utf-8', function(err, data){
  if(err) return console.error(err);
  result = data.split(/\n>*\s*/);
  // my array is what i want it to be
  console.log('length of result', result);

  for(let i = 1; i <= result.length - 2; i++) {
    console.log(`this is @ index ${i}`, result[i]);

    let resIndex = result[result.length - 2];
    console.log(resIndex);

    if(result[result.length] === result[i]){
      let node = `${result[i]} ${result[result.length]}`;
      console.log(node);
      htmlTree.add(node);
      console.log(htmlTree);
      break;
    }
  }
});

// });

  // result.forEach(node => {
  //   htmlTree.add(node);
  //   console.log(htmlTree);
  // });
// });
