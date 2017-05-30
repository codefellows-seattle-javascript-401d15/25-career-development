'use strict';

// const fs = require('fs');

// The big O of an array is O(n). The big O for a binary search tree is O(log n) for insert and delete.

let Node = function(val) {
  this.val = val;
  this.children = [];
};

// Tree {
//   root: Node {
//     value: {
//       eleName: 'xxx',
//       textContent: 'yyy' (can be empty string??)
//     },
//     children: [{Node}, {Node}, ...]
//   }
// }

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
    if(node.val === parentVal) {
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
