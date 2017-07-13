'use strict'

const archy = require('archy');

let Tree = module.exports = function() {
  this.root = null
}

let Node = function(label) {
  this.label = label
  this.nodes = []
}

// 0(n)
Tree.prototype.preOrder = function(cb) {
  _walk(this.root)

  function _walk(node) {
    cb(node)
    node.nodes.forEach(_walk)
  }
}

// 0(n)
Tree.prototype.add = function(val, parentVal) {
  if(!val) return console.error('Val required')
  if(!this.root) {
    this.root = new Node(val)
    return
  }

  this.preOrder(node => {
    if(node.label === parentVal) {
      //i apologize for how hacky this is...
      if(node.label === 'li' && node.nodes.length === 1) {
        return
      }
      if(node.label === 'p' && node.nodes.length === 1) {
        return
      }
      node.nodes.push(new Node(val))
      return
    }
  })
}

Tree.prototype.prune = function(val) {
  if(!val) return new Error('must pass val')
  if(!root) return
  let current = this.root
  let parent, index
  this.preOrder(node => {
    current.nodes.forEach((child, idx) => {
      if(child.val === val) {
        index = idx
        parent = current
        return
      }
      current = node
    })
  })

  if(!parent) return new Error('blah')
  parent.nodes.splice(index, 1)
}

Tree.prototype.height = function() {
  let height = 0;
  this.preOrder(node => {
    height += 1;
  })
  return height;
}

// 0(n)
Tree.prototype.prettyPrint = function() {
  console.log(archy(this.root));
}
