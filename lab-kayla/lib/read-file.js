'use strict'

const fs = require('fs')

const readHTML = module.exports = function(file, cb) {

  fs.readFile(file, function(err, data) {
    if(err) throw Error

    let newData = data.toString().split('\n')
    newData.shift()

    newData = newData.map(function(i) {
      return i.trim()
    })
    cb(null, newData)
  })
}
