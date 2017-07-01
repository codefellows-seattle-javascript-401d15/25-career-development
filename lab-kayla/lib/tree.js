'use strict'

const Node = require('./tree-node')

const Tree = module.exports = function() {
  this.root = null
}

//O(n)
Tree.prototype.preorder = function() {
  _walk(this.root)

  function _walk(node) {
    node.childern.forEach(_walk)
  }
}

//O(n)
Tree.prototype.add = function(val, parentVal) {
  if(!val) return console.error('Val required')
  if(!this.root) {
    this.root = new Node(val)
    return
  }

  this.preorder(node => {
    if(node.val === parentVal) {
      node.childern.push(new Node(val))
      return
    }
  })
}

//O(n)
Tree.prototype.prune = function(val) {
  if(!val) return new Error('Must Pass in a Val')
  if(!root) return

  let current = this.root
  let parent, index

  this.preorder(node => {
    current.childern.forEach((child, idx) => {
      if(child.val === val) {
        index = idx
        parent = current
        return
      }
      current = node
    })
  })

  if(!parent) return new Error('The Parents are Gone')
  parent.childern.splice(index, 1)
}
