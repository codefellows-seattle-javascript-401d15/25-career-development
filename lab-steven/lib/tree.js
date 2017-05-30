'use strict';

const Node = function(ele, textCon) {
  this.val = {
    eleName: ele,
    textContent: textCon || '',
  };
  this.children = [];
};

const Tree = module.exports = function() {
  this.root = null;
};

Tree.prototype.add = function(ele, parentEle, textCon) {
  let newNode = new Node(ele, textCon);

  if(!this.root) {
    this.root = newNode;
    return;
  }

  this.preOrder(_helper);

  function _helper(node) {
    if(node.val.eleName === parentEle) {
      node.children.push(newNode);
      return;
    }
  }
};

Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    cb(node);
    node.children.forEach(_walk);
  }
};
