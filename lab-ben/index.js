'use strict';

const Tree = require('./lib/tree.js');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});

module.exports = fs.readFileProm(`${__dirname}/../assets/minimal.html`)
.then((data) => {
  let parseData = data.toString();
  let dataSplit = parseData.split('<');
  let clean = [];
  dataSplit.forEach(line => {
    clean.push(removeExtra(line));
  });
  clean.shift();
  clean.shift();
  return parse(clean);
})
.then(tree => Promise.resolve(tree))
.catch(err => Promise.reject(err));

function removeExtra(line) {
  return line.split('\r\n').join('').split('>');
}

function parse(array) {
  let parent = [];
  let tree = new Tree();
  array.forEach(tag => {
    if(tag[0].split('')[0] !== '/') {
      let element = {
        elementType: tag[0],
        textContent: tag[1],
      };
      tree.add(element, parent[0]);
      parent.unshift(element);
    } else {
      parent.shift();
    }
  });
  return tree;
}
