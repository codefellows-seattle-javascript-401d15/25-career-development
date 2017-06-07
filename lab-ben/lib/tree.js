'use strict';

const Node = require('./node.js');

let Tree = module.exports = function() {
  this.root = null;
};

Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    cb(node);
    node.children.forEach(_walk);
  }
};

Tree.prototype.add = function(val, parentVal) {
  if(!val) return console.error('Val required');
  if(!this.root) {
    this.root = new Node(val);
    return;
  }
  this.preOrder(node => {
    if(node.val.elementType === parentVal.elementType && node.val.textContent === parentVal.textContent) {
      node.children.push(new Node(val));
      return;
    }
  });
};

Tree.prototype.prune = function(val) {
  if(!val) return new Error('must pass val');
  if(!root) return;
  let current = this.root;
  let parent, index;

  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if(child.val === val) {
        index = idx;
        parent = current;
        return;
      }
      current = node;
    });
  });

  if(!parent) return new Error('blah');
  parent.children.splice(index, 1);
};
