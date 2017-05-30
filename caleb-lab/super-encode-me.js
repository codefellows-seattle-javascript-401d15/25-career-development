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
    if(err) Promise.reject(new Error('You fucked aroudn with the read'))
    let result = [data.split('\n')]
    console.log(result)
    result.forEach(node => {
      htmlTree.addNode(node)
      console.log(htmlTree)
    })
  })
// }
// normalDocument()
