'use strict'

const Node = function(value){
  this.value = value
  this.children = []
}

const Tree = module.exports = function(){
  this.root = null
}

Tree.prototype.traversal = function(callback){
  _walk(this.root)
  function _walk(node){
    callback(node)
    node.children.forEach(_walk)
  }
}

Tree.prototype.addNode = function(value, parentValue = null){
  if(!value) return console.error('value required')
  if(!this.root){
    this.root = new Node(value)
    return
  }
  this.traversal(node => {
    if(node.val === parentValue){
      node.children.push(new Node(value))
      return
    }
  })
}

Tree.prototype.prune = function(value){
  if(!value) return new Error('Pass a value')
  if(!root) return new Error('No root, add new nodes to the root')
  let current = this.root
  let parent, index
  this.traversal(node => {
    current.children.forEach((child, idx) => {
      if(child.value === value){
        index = index
        parent = current
        return
      }
      current = node
    })
  })
  if(!parent) return new Error('No parent found')
  parent.children.splice(index, 1)
}

Tree.prototype.remove = function(value){
  let current = this.root
  let parent, index
  this.traversal(node => {
    current.children.forEach((child, idx) => {
      if(child.value === value){
        parent = node
        current = child
        index = idx
        return
      }
    })
    current.forEach(child => {
      current.children.push(child)
    })
    parent.children.splice(index, 1)
  })
}

Tree.prototype.countChildren = function(){
  this.nodeWithMost
  this.mostChildren = 0

  this.traversal(node => {
    if(node.children.length > mostChildren){
      nodeWithMost = node
      mostChildren = nodeWithMost.children.length
    }
    return this.nodeWithMost, this.mostChildren
  })
}
