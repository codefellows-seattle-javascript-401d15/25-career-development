'use strict';

const expect = require('chai').expect;
const Node = require('../lib/tree-node');
const Tree = require('../lib/tree');

describe('Testing tree module', function() {

  describe('the tree constructor method', () => {

    let tree = new Tree();
    it('should create a new tree object', () => {
      console.log('tree', tree);
      expect(tree).to.be.a('object');
    });
    it('should have a root with value null', () => {
      expect(tree).to.have.property('root');
      expect(tree.root).to.equal(null);
    });
  }); //end of tree constructor test

  describe('the node constructor method', () => {
    let node = new Node('<h2>');
    it('should create a new node', () => {
      expect(node).to.be.a('object');
    });
    it('should have a value property', () => {
      expect(node).to.have.property('val');
      expect(node.val).to.equal('<h2>');
    });
    it('should have a children property', () => {
      expect(node).to.have.property('children');
      expect(node.children).to.an('array');
      expect(node.children).to.be.empty;
    });

  }); //end of node constructor test

  describe('the add method', () =>  {

    let tree = new Tree();
    tree.add('<html>');

    it('should create a new node', () => {
      expect(tree).to.contain.a('object');
    });

    it('if root does not exists, it should assign root with the new node\'s value', () => {
      expect(tree.root.val).to.equal('<html>');
      expect(tree).to.contain.property('root');
      expect(tree.root).to.be.a('object');
    });

    it('should traverse the tree and add the node as a child to its parent node', () => {
      let tree = new Tree();
      tree.add('<html>');
      tree.add('<head>', '<html>');
      tree.add('<title>', '<head>');
      expect(tree.root.children).to.not.be.empty;
      expect(tree.root.children[0]).to.be.a('object');
      expect(tree.root.children[0].val).to.equal('<head>');
      expect(tree.root.children[0].children).to.not.be.empty;
      expect(tree.root.children[0].children[0]).to.be.a('object');
      expect(tree.root.children[0].children[0].val).to.equal('<title>');
    });

  });

  describe('the preOrder traversal method', () => {
    it('should ')

  });


});
