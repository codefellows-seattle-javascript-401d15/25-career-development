# Description:
- For this project we wanted to turn the data from an HTML moc data into tree algorithm to make it show parent child relationship. When doing this you need to implement the prototypes that are part of the tree algorithms that are needed to create this tree. The methods that are used for this are the .add, method which looks something like this:
`Tree.prototype.add = function(val, parentVal) {
  if(!val) return console.error('Val required')
  if(!this.root) {
    this.root = new Node(val)
    return
  }

  this.preOrder(node => {
    if(node.val === parentVal) {
      node.children.push(new Node(val))
      return
    }
  })
}`

- This will add take after the root is made, put children into the parent nodes.
- The only dependency that I have at this time is bluebird and the way that you install that is first you install the package.json file by using `npm init` and fill out all the information needed.
- After you fill all the information out you then will do `npm i -S bluebird` and this will install the bluebird promises as a needed dependency.
- To run weather or not this is going to work you do in the command line `node index.js` and this will run the code and show what it looks like right now.
