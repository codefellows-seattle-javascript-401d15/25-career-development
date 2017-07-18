'use strict';

let Node = function(val) {
  this.val = val;
  this.children = [];
};

let Tree = module.exports = function() {
  this.root = null;
};

Tree.prototype.preorder = function() {
  _walk(this.root);

  function _walk(node) {
    node.children.forEach(_walk);
  }
};

Tree.prototype.add = function(val, parentVal) {
  if(!val) return console.error('value required');
  if(!this.root) {
    this.root = new Node(val);
    return;
  }

  this.preorder(node => {
    if(node.val === parentVal) {
      node.children.push(new Node(val));
      return;
    }
  });
};

Tree.prototype.prune = function(val) {
  if(!val) return new Error('value required');
  if(!root) return;
  let current = this.root;
  let parent, index;

  this.preorder(node => {
    current.children.forEach((child, idx) => {
      if(child.val === val) {
        index = idx;
        parent = current;
        return;
      }
      current = node;
    });
  });

  if(!parent) return new Error('no parent');
  parent.children.splice(index, 1);
};
