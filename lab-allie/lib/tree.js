'use strict';

const TreeNode = module.exports = function(val) {
  this.value = val;
  this.children = [];
};

const Tree = module.exports = function() {
  this.root = null;
};

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

Tree.prototype.preOrder = function(cb) {
  _walk(this.root);
  
  function _walk(node) {
    cb(node);
    node.children.forEach(_walk);
  }
};

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