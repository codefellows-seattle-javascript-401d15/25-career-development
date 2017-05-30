'use strict'

const fs = require('fs')

const Node = function(element, data){
  this.element = element,
  this.data = data,
  this.children = []
}


module.exports = exports = {}

exports.DOMparse = function(){
  // fs.readfile(htmlFile)
  let str
  fs.readFile(`${__dirname}/../../assets/minimal.html`, 'utf-8', function(err, data){
    if(err) throw err
    str = data.toString()
    // console.log(str)

    let openSplit = str.split('<')      //(/<^[a-zA-Z0-9]+$>/)
    // console.log(openSplit);
    console.log(openSplit.length);
    let elements = openSplit.map(item => item.split('>'))

    let stack = []

    for(let i =0; i < elements.length; i++) {
      let item = elements[i]
      if(item[0][0] !== '!' && item[0][0] !== ''){
        if(item[0][0] !== '/'){
          let node = new Node(item[0], item[1])
          stack.push(node)
          // if(stack)
        }
      }
    }
    console.log(stack);
  })

}
exports.DOMparse()
