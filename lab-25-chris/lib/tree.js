// :::: TREES DATASTRUCTURE :::: //

// O(n)
const TreeNode = module.exports = function(value) {
  this.value = value;
  this.childeren = [];
};

const Tree = module.exports = function() {
  this.root = null;
};

// Tree prototypes
Tree.prototype.add = function(val, parentVal = null) {
  if(!val) return console.error('value required');
  let newNode = new Node(val);

  if(!this.root) {
    this.root = newNode;
    return;
  }

  this.preOrder(node => {
    if(node.val === parentVal) {
      node.childeren.push(newNode);
      return;
    }
  });
};

Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    cb(node);
    node.childeren.forEach(_walk);
  }
};

Tree.prototype.prune = function(val) {
  if(!val) return new Error('no value passed');
  if(!root) return new Error('tree does not exist');

  let current = this.root,
    parent, index;

  this.preOrder(node => {
    current.childeren.forEach((child, i) => {
      if(child.val === val) {
        index = i;
        parent = current;
        return;
      }
      current = node;
    });
  });
  if(!parent) return new Error('no parent');
  parent.childeren.splice(index, 1);
};

Tree.prototype.remove = function(val) {

};

// TreeNode prototypes
TreeNode.prototype.appendChild = function(node) {
  if(!(node instanceof TreeNode)) throw new Error('node must be of type TreeNode');
  this.childeren.push(node);
};

TreeNode.prototype.prettyPrint = function() {
  let result = '';
  let queue = [this];

  let breadthFirstTraversal = () => {
    let next = queue.pop();
    if(!next) return;

    result += next.value + ' ';
    next.childeren.forEach(child => queue.unshift(child));
    breadthFirstTraversal();
  };
  breadthFirstTraversal();
  console.log(result);
  return result;
};
