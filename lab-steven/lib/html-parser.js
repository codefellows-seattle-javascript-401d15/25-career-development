'use strict';

const Promise = require('bluebird');
const fs = Promise.promisify(require('fs'));

//parse html string into values ready to be input into nodes?
//input: html file path
//output: array ready for node creation? e.g. [<html>, <head>, <title>, titletext, </title>, </head>, ...]
module.exports = function(path){
  let htmlArr = [];
  fs.readfile(path).toString()
  .then(buf => {
    
    return buf.split(''); //is array best route to go?
  })
  .then(arr => {
    //recurse or something? the way it is now, I don't think it will work
    let ele = '';
    let text = '';
    //would this helper function make it easier to recurse through? instead of for loop?
    _eleFind(0);

    function _eleFind(index){
      let i = index;
      if (arr[i] === '<'){
        while (arr[i] !== '>'){
          ele += arr[i];
          i++;
        }
        htmlArr.push(ele);
        ele = '';
        _eleFind(i);
      } else {
        while(arr[i] !== '<') {
          text += arr[i];
          i++;
        }
        htmlArr.push(text);
        text = '';
        _eleFind(i);
      }
    }
    console.log(ele);
    console.log(text);
    console.log(htmlArr);
    //at each '<' if want to divert all following characters into variable 'ele' until we reach a closing '>'
    // if(arr[i] === '<'){
    //   while (arr[i] !== '>'){
    //     i++;
    //     ele += arr[i];
    //   }
    //   htmlArr.push(ele);
    //   ele = '';
    // }
    //if item isn't '<' then it's a text string i want to capture
    // if(arr[i] !== '<') {
    //   text += arr[i];
    //
    //   htmlArr.push(text);
    // }
  })
  .catch(err => new Error(err));

};
