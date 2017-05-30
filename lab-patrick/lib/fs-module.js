'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});
const Node = require('../lib/node-constructor');
const Tree = require('../lib/tree-constructor');

let tempArray = [];
module.exports = function(data){
  fs.readFile(data, (err, data) =>{
    let parseItem = data.toString().split('\n');
    parseItem.forEach(function(val){
      let temp = new Node(val);
      tempArray.push(temp);
      return tempArray;
    });
    // console.log(tempArray);
    let newTree = new Tree()
    for (var i = 0; i < tempArray.length; i++) {
      if(tempArray[i].val==='<html>'){
        newTree.add(tempArray[i].val)

      }
      else if(tempArray[i].val==='  <head>'){
        newTree.add(tempArray[i].val,'<html>')

      }
      if(tempArray[i].val.split('>')[0] === '    <title'){
        newTree.add(tempArray[i].val,'  <head>')

      }
      if(tempArray[i].val==='  <body>'){
        newTree.add(tempArray[i].val,'<html>')
        console.log(newTree);

      }
      // if(tempArray[i].val==='    <header>'){
      //   tempArray[i-1].children.push(tempArray[i]);
      //   console.log('Tree', tempArray[i-5]);
      // }
      // if(tempArray[i].val==='      <h2>'){
      //   tempArray[i-1].children.push(tempArray[i]);
      //   console.log('Tree', tempArray[i-1]);
      // }
    }
  });
};
