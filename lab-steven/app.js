'use strict';

const htmlParse = require('./lib/html-parser');
const Tree = require('./lib/tree.js');

let dom = new Tree();

module.exports = function createDOM(path){
  htmlParse(path);
  //iterate through array and create nodes, add them to tree?
  
};
