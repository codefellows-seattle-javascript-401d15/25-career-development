'use strict'

const Tree = require('./models/tree.js')
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'})
let htmlTree = new Tree()
// module.exports = function(router){
//
// }

// let normalDocument = () => {
fs.readFile(`${__dirname}/assets/minimal.html`, 'utf-8', function(err, data){
  if(err) Promise.reject(new Error('Can\'t read anything'))
  let result = []
  data.split('\n').forEach(node => result.push(node))
  result = result.map(node => node.trim())
  console.log(result)
  htmlTree.addNode(result[1])
  // htmlTree.addNode(result[2], result[1])
  // htmlTree.addNode(result[3], result[2])
  // htmlTree.addNode(result[5], result[3])
  // htmlTree.addNode(result[6], result[1])
  // htmlTree.addNode(result[7], result[6])
  // htmlTree.addNode(result[8], result[6])
  // htmlTree.addNode(result[9], result[6])
  // htmlTree.addNode(result[10], result[9])
  // htmlTree.addNode(result[11], result[9])
  // htmlTree.addNode(result[12], result[9])
  // htmlTree.addNode(result[13], result[9])
  // htmlTree.addNode(result[17], result[6])
  // htmlTree.addNode(result[18], result[6])
  // htmlTree.addNode(result[19], result[18])
  // htmlTree.addNode(result[20], result[18])
  // htmlTree.addNode(result[23], result[6])
  // htmlTree.addNode(result[24], result[23])
  console.log(htmlTree.root.children)
})
