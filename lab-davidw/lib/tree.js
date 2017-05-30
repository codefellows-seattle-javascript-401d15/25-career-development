'use strict';

const fs = require('fs');

let Node = module.exports = function(eleName, textContent) {
  this.val = {
    eleName: eleName,
    textContent: textContent || '',
  };
  this.children = [];
};

let Tree = module.exports = function() {
  this.root = null;
};

Node.prototype.appendChild = function(node) {
  if (!(node instanceof Node)) {
    throw new Error('node must be of type Node');
  }

  this.children.push(node);
};


Tree.prototype.dataToBuf = function(target) {
  this.target = target;
  fs.readFile(target, 'utf8');
};

//Breadth first traversal -- O(n)
Node.prototype.prettyPrint = function() {
  let result = '';

  let queue = [this];

  let breadthFirstTraversal = () => {
    let next = queue.pop();
    if(!next) return;
    result += next.value + ' ';
    next.children.forEach(child => queue.unshift(child));
    breadthFirstTraversal();
  };
  breadthFirstTraversal();
  console.log('result', result);
  return result;
};

Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    cb(node);
    node.children.forEach(_walk);
  }
};

Tree.prototype.add = function(val, parentVal, textContent) {
  let newNode = new Node(val);

  if(!this.root) {
    this.root = newNode;
    return;
  }

  this.preOrder(node => {
    if(node.val === parentVal) {
      node.children.push(newNode);
      return;
    }
  });
};

Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    cb(node);
    node.children.forEach(_walk);
  }
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

  if(!parent) return new Error('parent node required');
  parent.children.splice(index, 1);
};

Tree.prototype.remove = function(val) {
  if(!val) return new Error('value required');
  if(!root) return;
  let current = this.root;
  let parent = this.parent;
  let child;

  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if(child.val === val) {
        this.idx = idx;
        parent = current;
        child = current.children[idx];
        return;
      }

      current = node;
    });
  });
  if(!parent) return new Error('cannot add a node to nonexistant parent node');

  parent.children.forEach.push(child);
  parent.chidren[val].slice;
};
