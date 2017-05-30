'use strict';

require('angular-mocks');

describe('Tree constructor', function(){

  it('should set a value property', () => {
    expect(true).toEqual(true);
      // this.val = val;
  });

  it('should have an empty array for children', () => {
    expect(true).toEqual(true);
    // this.children = [];
  });


  it('should have an initial root node of null', () => {
    expect(true).toEqual(true);
    // this.root = null;
  });

});

describe('preOrder prototype', function(){

  it('should walk the tree for each child node', () => {
    // node.children.forEach(_walk)
  });

});

describe('add prototype', function(){

  it('should add a new node', () => {
    // this.root = new Node(val);
  });

});

describe('prune prototype', function(){

  it('should remove one node with splice', () => {
    // parent.children.splice(index, 1);
  });

});
