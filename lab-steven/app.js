'use strict';

const Promise = require('bluebird');
const fs = Promise.promisify(require('fs'));


const Tree = require('./lib/tree.js');

let dom = new Tree();

function createDOM(path, callback){
  fs.readfile(path, callback).toString()
  .then(buf => {
    buf.split('')
  })
}
