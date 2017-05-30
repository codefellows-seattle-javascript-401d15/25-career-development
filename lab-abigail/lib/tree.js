'use strict';

const fs = require('./fs.js');

const TreeNode = module.exports = function(value) {
  this.value = value;
  this.children = [];
};

const Tree = module.exports = function() {
  this.root = null;
};

Tree.buildTree = function(treeData) { // from fs readFile
  this.root = '<html';
  let stack = new Stack;
  stack.unshift(newElement);
  if(!'</html>') {
    if(newElement) {
      // stack.unshift(newElement);
      // create stack that adds element and removes element at closing tag
      // elements above are children
      // siblings exist on same levels
      // conditionals to handle <meta> tags

    } if (closureOfNewElement) {
      stack.pop();
    }
  }
  return treeObject;
};


// Prototypes

TreeNode.prototype.appendChild = function(node){
  if(!(node instanceof TreeNode))
  throw new Error('node must be of type TreeNode');
  this.children.push(node);
};

TreeNode.prototype.prettyPrint = function(){
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
  console.log(result);
  return result;
};

Tree.prototype.add = function(val, parentVal) {
  let newNode = new TreeNode(val);

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
Tree.prototype.remove = function(val) {};

Tree.prototype.prune = function(val) {
  if(!val) return console.error();
  if(!root) return;
  let current = this.root;
  let parent;
  let index;

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
  if(!parent) return console.error();

  parent.children.splice(index, 1);
};
