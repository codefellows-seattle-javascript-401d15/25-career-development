'use strict';

let Node = function(val) {
  this.val = val;
  this.children = [];
};

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
