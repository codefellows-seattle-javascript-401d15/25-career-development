# Tree Data Structure - Lab 25

### Instantiating a new Tree - Method 1
The user can open `node` in the command line and make a sample tree by entering the following lines of code:

```
const TreeNode = module.exports = function(value) {
  this.value = value;
  this.children = [];
};

const Tree = module.exports = function() {
  this.root = null;
};

TreeNode.prototype.appendChild = function(node) { 
  if (!(node instanceof TreeNode)) {
    throw new Error('node must be of type TreeNode');
  }
  
  this.children.push(node);
};
```

Then instantiate a new tree by typing: `let treeroot = new TreeNode(2)`, for example. The tree will appear as: 
```
treeroot
{ value: 2, children: [] }
```

Additional nodes can be added to the tree by adding nodes to the root and to the children of exisiting nodes. For example, enter the following commands: 
`treeroot.appendChild(new TreeNode(40))` and a node with a value of 40 will be added as a child of the starting node with a value of 2: 
```
{ value: 2, 
  children: 
  [ { value: 40, children: [] } ] }```

To continue to add children to the node with a value of 2, enter additional commands:

`treeroot.appendChild(new TreeNode(12))`

`treeroot.appendChild(new TreeNode(9))`

The tree will now appear as:

```
{ value: 2,
  children: 
   [ { value: 40, children: [] },
     { value: 12, children: [] },
     { value: 9, children: [] } ] }
     ```
     
Children can be added to specific nodes using the following sample command:
`treeroot.children[0].appendChild(new TreeNode(5))`

The tree now appears as:
```
{ value: 2,
  children: 
   [ { value: 40, children: [Object] },
     { value: 12, children: [] },
     { value: 9, children: [] } ] }
     ```
     
And the first node with a value of 40 now has a child with a value of 5:

```
treeroot.children[0]
{ value: 40, 
  children: 
  [ { value: 5, children: [] } ] }
  ```
  
Entering the following commands:

`treeroot.children[0].appendChild(new TreeNode(8))`

`treeroot.children[2].appendChild(new TreeNode(17))`

And now the tree appears as:
```
{ value: 2,
  children: 
   [ { value: 40, children: [Object] },
     { value: 12, children: [] },
     { value: 9, children: [Object] } ] }
```

The node with a value of 40 appears as:
```
{ value: 40,
  children: 
  [ { value: 5, children: [] }, 
    { value: 8, children: [] } ] }
```

The node with a value of 12 appears as:
```
{ value: 12, children: [] }
```

The node with a value of 9 appears as: 
```
{ value: 9, 
  children: 
  [ { value: 17, children: [] } ] }
  ```
  
The prettyPrint method is used to print out the node values in breadth-first traversal order. The method should be included in node (see `tree.js` file) and then the method can be called by entering  `treeroot.prettyPrint()`. The function will return a string that appears as `'2 40 12 9 5 8 17 '` for this example.

### Instantiating a new Tree - Method 2
The tree can also be instantiated and nodes can be added using the `.add` prototype method. To do so, type the following into the terminal while running node: 
`tree.add(5, null)`

Note: null must be passed in as the second parameter when adding to the root because the root does not have a parent node. Thereafter, the nodes can be added by passing in the value of the node to be entered as the first argument and the parent's value as the second argument. For example: 
`> tree.add(4, 5)`

This produces a tree that appears as: 

`
{ root: { value: 5, children: [ [Object] ] } }`

And tree.root.children appears as: 

`
[ { value: 4, children: [] } ]`

Continue to build out a sample tree by using the follwing commands:

`
tree.add(2, 6)
`

`
tree.add(1, 2)
`

`
tree.add(8, 1)
`

This will produce a tree that appears as: 
```
{ root: { value: 5, children: [ [Object] ] } }
[ { value: 4, children: [] },
  { value: 6, children: [ { value: 2, children: [] } ] }
[ { value: 2, children: { value: 8, children: [] } ] } ]
```

The prune method can now be used to remove a portion of the tree and all its children. For example, `tree.prune(4)` results in a tree that appears as: 
```
{ root: { value: 5, children: [] } }
```

### Testing
To run the tests on the method, type `npm i` in the command line to install chai and mocha as dependencies. Then, type `npm run test` in the command line to run all of the tests. 

There are currently 7 tests passing which contain a total of 25 assertions.