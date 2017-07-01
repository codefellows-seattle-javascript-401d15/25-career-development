'use strict'

const readHTML = require('./fs-read.js')
const Tree = require('./tree')

const createDOM = module.exports = function() {
  readHTMl(`${__dirname}/../assets/minimal.html`, function(err, data) {

    if(err) throw err

    let legend = {
      html: data[0],
      head: data[1],
      title: data[2],
      body: data[3],
      header: data[4],
      h2: data[5],
      nav: data[6],
      ul: [7],
      li1: [8],
      li2: [9],
      main: [10],
      section: [11],
      sectP1: [12],
      sectP2: data[13]
    }

    let htmlTree = new Tree()

    htmlTree.add(legend.html)

    //root
    htmlTree.add(legend.head, legend.html)
    htmlTree.add(legend.body, legend.html)

    //head
    htmlTree.add(legend.title, legend.head)

    //body
    htmlTree.add(legend.header, legend.body)
    htmlTree.add(legend.main, legend.body)

    //header
    htmlTree.add(legend.h2, legend.header)
    htmlTree.add(legend.nav, legend.header)

    //nav
    htmlTree.add(legend.ul, legend.nav)

    //ul
    htmlTree.add(legend.li1, legend.ul)
    htmlTree.add(legend.li2, legend.ul)

    //main
    htmlTree.add(legend.section, legend.main)

    //section
    htmlTree.add(legend.sec1, legend.section)
    htmlTree.add(legend.sec2, legend.section)

    htmlTree.preOrder(function print(node) {
      console.log(node)
    })
  })
}
