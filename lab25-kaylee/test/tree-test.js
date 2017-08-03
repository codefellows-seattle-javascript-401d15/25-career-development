'use strict';

const expect = require('chai').expect;

const Tree = require('./../lib/tree.js');
// const Node = require('./../lib/node.js');

let testTree = new Tree();
// let testTreeRoot = new Node(5);

describe('testing tree methods', function() {
  describe('creating a new tree', () => {
    it('should create a new tree', done => {
      expect(testTree).to.exist;
      done();
    })
    it('should have a root', done => {
      expect(testTree).to.have.property('root');
      done();
    })
  })
  describe('testing add method', () => {
    it('should not contain any nodes before the method is called', done => {
      expect(testTree.root).to.be.null;
      done();
    })
    it('should have a root with a value of 1 when the method is called with arguments 1 and null', done => {
      testTree.add(1, null);
      expect(testTree.root.val).to.equal(1);
      done();
    })
    it('should add other nodes to the tree when passed two arguments', done => {
      testTree.add(1, null);
      testTree.add(2, 1);
      testTree.add(3, 2);
      expect(testTree).to.contain(2);
      expect(testTree).to.contain(3);
      done();
    })
  })
  describe('testing prune method', () => {
    it('should contain nodes before the method is called', done => {
      testTree.add(1, null);
      testTree.add(2, 1);
      testTree.add(3, 2);
      testTree.add(4, 3);
      expect(testTree).to.contain(1);
      expect(testTree).to.contain(2);
      expect(testTree).to.contain(3);
      expect(testTree).to.contain(4);
      done();
    })
    it('should remove all child nodes of specified node', done => {
      testTree.add(1, null);
      testTree.add(2, 1);
      testTree.add(3, 2);
      testTree.add(4, 3);
      testTree.prune(3);
      expect(testTree).to.contain(1);
      expect(testTree).to.contain(2);
      expect(testTree).to.contain(3);
      expect(testTree).to.not.contain(4);
      done();
    })
  })
})
