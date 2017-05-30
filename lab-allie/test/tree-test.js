'use strict';

const expect = require('chai').expect;

const TreeNode = require('../lib/treenode.js');
const Tree = require('../lib/tree.js');

let tree = new Tree();

let treeroot = new TreeNode(2);

describe('Testing the Tree methods', function() {
  
  describe('Instantiating a new Tree object', () => {
    
    it('should instantiate a new tree', done => {
      expect(tree).to.exist;
      done();
    });
    
    it('should be an object', done => {
      expect(tree).to.be.a('object');
      done();
    });
  });
  
  describe('Testing the add method', () => {
    
    it('should not contain any children before the method is applied', done => {
      expect(tree).to.not.have.valueOf(4);
      done();
    });
    
    it('should add the node with a specific value after the method is applied', done => {
      tree.add(4, null);
      expect(tree).to.have.valueOf(4);
      done();
    });
    
    it('should be able to add additional nodes the a child of the root', done => {
      tree.add(6, 4);
      expect(tree).to.have.valueOf(6);
      done();
    });
    
  });
  
  describe('Testing the prune method', () => {
    it('should contain the node prior to pruning', done => {
      tree.add(1, null);
      tree.add(2, 1);
      tree.add(3, 1);
      tree.add(4, 3);
      tree.add(5, 3);
      tree.add(6, 5);
      tree.add(7, 5);
      tree.add(8, 5);
      
      expect(tree).to.have.valueOf(1);
      expect(tree).to.have.valueOf(2);
      expect(tree).to.have.valueOf(3);
      expect(tree).to.have.valueOf(4);
      expect(tree).to.have.valueOf(5);
      expect(tree).to.have.valueOf(6);
      expect(tree).to.have.valueOf(7);
      expect(tree).to.have.valueOf(8);
      
      tree.prune(5);
      expect(tree).to.not.have.valueOf(6);
      expect(tree).to.not.have.valueOf(7);
      expect(tree).to.not.have.valueOf(8);
      done();
    });
  });
  
  describe('Testing the appendChild and prettyPrint node methods', () => {
    
    it('should be able to add another node', done => {
      expect(treeroot).to.not.have.valueOf(40);
      treeroot.appendChild(new TreeNode(40));
      expect(treeroot).to.have.valueOf(40);
      
      expect(treeroot).to.not.have.valueOf(15);
      treeroot.appendChild(new TreeNode(15));
      expect(treeroot).to.have.valueOf(15);
      
      expect(treeroot).to.not.have.valueOf(5);
      treeroot.children[0].appendChild(new TreeNode(5));
      expect(treeroot).to.have.valueOf(5);

      expect(treeroot).to.not.have.valueOf(92);
      treeroot.children[0].appendChild(new TreeNode(92));
      expect(treeroot).to.have.valueOf(92);
      
      treeroot.prettyPrint();
      expect(treeroot.prettyPrint()).to.deep.contain('2 40 15 5 92');
      done();
    });
  });
});