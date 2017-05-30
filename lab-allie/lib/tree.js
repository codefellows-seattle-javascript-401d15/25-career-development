'use strict';

const TreeNode = require('./treenode.js');

const Tree = module.exports = function() {
  this.root = null;
};

const fs = require('fs');

// O(n)
Tree.prototype.add = function(val, parentVal) { 
  let newNode = new TreeNode(val);
  
  if(!this.root && !parentVal) {
    this.root = newNode;
    return;
  }
  
  this.preOrder(node => {
    if(node.value === parentVal) {
      node.children.push(newNode);
      return;
    }
  });
};

// O(n)
Tree.prototype.preOrder = function(cb) {
  _walk(this.root);
  
  function _walk(node) {
    node.children.forEach(_walk);
    cb(node);
  }
};

// O(n)
Tree.prototype.prune = function(val) {
  if(!val) return new Error('Please enter a value');
  if(!root) return;
  let current = this.root;
  let parent, index;
  
  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if(child.value === val) {
        index = idx;
        parent = current;
        parent.children.splice(index, 1);
        return;
      }
      console.log('current', current);
      current = node;
    });
  });  
};

// Tree.prototype.remove = function(val) {};




 // O(n)
TreeNode.prototype.appendChild = function(node) { 
  if (!(node instanceof TreeNode)) {
    throw new Error('node must be of type TreeNode');
  }
  
  this.children.push(node);
};

// treeRoot = new TreeNode(3);
// treeRoot.appendChild(new TreeNode(40));
// treeRoot.children[0].appendChild(new TreeNode(7));

//Breadth first traversal -- O(n)
TreeNode.prototype.prettyPrint = function() {
  let result = '';
  
  let queue = [this];
  
  let breadthFirstTraversal = () => {
    let next = queue.pop();
    if(!next) return;
    result += next.value + ' ';
    next.children.forEach(child => queue.unshift(child)); //unshift is opposite of push, adds to beginning
    breadthFirstTraversal();
  };
  breadthFirstTraversal();
  console.log('result', result);
  return result;
};

fs.readFile('../assets/minimal.html', 'utf-8', function read(err, data) {
  if (err) throw err;

  let result = data.split('\n').replace(' ', '');
  console.log('result', result);
  
  let filetree = new Tree();
  filetree.add(result[1], null);
  filetree.add(result[2], result[1]);
  filetree.add(result[5], result[1]);
  
  filetree.add(result[3], result[2]);
  filetree.add(result[6], result[5]);
  filetree.add(result[17], result[5]);
  filetree.add(result[23], result[5]);

  filetree.add(result[7], result[6]);
  filetree.add(result[8], result[6]);

  filetree.add(result[9], result[8]);
  
  filetree.add(result[10], result[9]);
  filetree.add(result[11], result[9]);
  filetree.add(result[12], result[9]);
  filetree.add(result[13], result[9]);

  filetree.add(result[18], result[17]);
  filetree.add(result[19], result[18]);
  filetree.add(result[20], result[18]);

  filetree.add(result[24], result[23]);

  console.log(filetree);
  return filetree;
});

const fs = require('fs');

fs.readFile('../assets/minimal.html', 'utf-8', function read(err, data) {
  if (err) throw err;

  let result = data.split('\n');
  console.log('result', result);
});