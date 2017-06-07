'use strict';

const readHTML = require('./fs-read.js');
const Tree = require('./tree');

const createDOM = module.exports = function() {

  readHTML(`${__dirname}/../assets/minimal.html`, function(err, data) {

    if(err) throw err;

    let legend = {
      html: data[0],
      head: data[1],
      title: data[2],
      body: data[4],
      header: data[5],
      h2: data[6],
      nav: data[7],
      ul: data[8],
      li1: data[9],
      li2: data[10],
      li3: data[11],
      li4: data[12],
      main: data[16],
      section: data[17],
      sectP1: data[18],
      sectP2: data[19],
      footer: data[22],
      footerP: data[23],
    };

    let htmlTree = new Tree();

    htmlTree.add(legend.html); //create root

    //root
    htmlTree.add(legend.head, legend.html);
    htmlTree.add(legend.body, legend.html);

    //head
    htmlTree.add(legend.title, legend.head);

    //body
    htmlTree.add(legend.header, legend.body);
    htmlTree.add(legend.main, legend.body);
    htmlTree.add(legend.footer, legend.body);

    //header
    htmlTree.add(legend.h2, legend.header);
    htmlTree.add(legend.nav, legend.header);

    //nav
    htmlTree.add(legend.ul, legend.nav);

    //ul
    htmlTree.add(legend.li1, legend.ul);
    htmlTree.add(legend.li2, legend.ul);
    htmlTree.add(legend.li3, legend.ul);
    htmlTree.add(legend.li4, legend.ul);

    //main
    htmlTree.add(legend.section, legend.main);

    //section
    htmlTree.add(legend.sectP1, legend.section);
    htmlTree.add(legend.sectP2, legend.section);

    //footer
    htmlTree.add(legend.footerP, legend.footer);

    htmlTree.preOrder(function print(node) {
      console.log(node);
    });

  });
};
