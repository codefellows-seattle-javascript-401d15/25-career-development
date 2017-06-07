'use strict';

const Tree = module.exports = function() {
  this.root = null;
};

const Node = function(val) {
  this.value = val;
  this.children = [];
};

Tree.prototype.preOrder = function(callback) {
  _walk(this.root);

  function _walk(node) {
    callback(node);
    node.children.forEach(_walk);
  }
};

Tree.prototype.add = function(val, parentVal=null) {
  if (!val) return new Error('val required');
  if (!this.root) {
    this.root = new Node(val);
    return;
  }

  this.preOrder(node => {
    if (node.value === parentVal) {
      node.children.push(new Node(val));
      return;
    }
  });
};

Tree.prototype.prune = function(val) {
  if (!val) return new Error('val required');
  if (!this.root) return;
  let current = this.root;
  let parent, index;

  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if (child.value === val) {
        index = idx;
        parent = current;
        return;
      }
      current = node;
    });
  });

  if (!parent) return new Error('no parent node');
  parent.children.splice(index, 1);
};

Tree.prototype.remove = function(val) {
  if (!val) return new Error('val required');
};
