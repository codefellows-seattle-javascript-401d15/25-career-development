'use strict';

const Node = require('./tree-node');

const Tree = module.exports = function() {
  this.root = null;
};

//O(N)
Tree.prototype.add = function(val, parentVal) {
  let newNode = new Node(val);

  if(!this.root) {
    this.root = newNode;
    return;
  }

  this.preOrder(_helper);

  function _helper(node) {
    if(node.val === parentVal) {
      node.children.push(newNode);
      return;
    }
  }
};

//O(N)
Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    cb(node);
    node.children.forEach(_walk);
  }
};
