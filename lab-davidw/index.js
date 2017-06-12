'use strict';

const fs = Promise.promisifyAll(require('fs'));
// let newBuffer = new Buffer;
const Tree = require('../lib/tree.js');
const Promise = require('bluebird');


module.exports.makeBuff = function(target) {
  //'target a file path, take the file at the target location and, using fs.js create a buffer out of the document.';
  fs.readFile('./assets/minimal.html', 'utf8', callback);


};

function getTagName(ele) {
  if(!ele) returnreturn isOpeningTag(ele ? ele.replace('<', '') : )
}

module.exports.buildTree = function(tree, elements) {
  let stack = [];
  elements.forEach(ele => {
    if(isOpeningTag(ele)) {
      let val = getTagName(ele);
      let parent = getTagName(stack[stack.length -1]);
      tree.add(val, parent);
      stack.push(ele);
    } else {
      stack.pop();
    }
  });
  return tree;
};
