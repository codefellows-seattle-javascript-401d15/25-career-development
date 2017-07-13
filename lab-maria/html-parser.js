'use strict'

const Tree = require('./tree')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})

module.exports = function(filePath) {
  let tree = new Tree()

  fs.readFileProm(`${__dirname}/./assets/${filePath}`)
  .then(fileData => fileData.toString().replace(/\s+/g, ''))
  .then(fileStr => fileStr.split('>'))
  .then(validHTML)
  .then(eleArray => buildTree(tree, eleArray))
  .then(tree => tree.prettyPrint())
  .catch(console.error)
}

// HELPER METHODS //

// O(1)
function validHTML(stringArray) {
  if(!stringArray[0].match(/!DOCTYPEhtml/)) {
    return Promise.reject(new Error('File must be a valid HTML document'))
  }
  stringArray.shift()
  return stringArray
}

// O(1)
function isOpeningTag(str) {
  if(!str) return
  if(str.charAt(0) === '<' && str.charAt(1) !== '/') return true;
  return false
}

// O(1)
function getTagName(ele) {
  if(!ele) return
  return isOpeningTag(ele) ? ele.replace('<', '') : ele.replace('</', '')
}

// O(1)
function getText(ele) {
    if(!ele) return
    if(isOpeningTag(ele)) {
      return;
    }
    if(ele.charAt(0) !== '<') {
      return true;
    }
}

// O(n)
function buildTree(tree, elements) {
  let stack = []
  console.log(elements);
  elements.forEach(ele => {
    if(isOpeningTag(ele)) {
      let val = getTagName(ele)
      let parent = getTagName(stack[stack.length - 1])
      tree.add(val, parent)
      stack.push(ele)
    } else {
      let parent = getTagName(stack[stack.length - 1])
      if(getText(ele)) {
        let element =  ele.split(`</${parent}`)
        tree.add(element[0], parent)
      }
        stack.pop();
    }
  })
  return tree
}
