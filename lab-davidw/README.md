# lab 25 - Tree Data Structure

### Goal
To create methods on the supplied data tree constructor which will perform the following actions:
- Read an HTML file, using fs.js, into a buffer.
- Using the data in the buffer, create a data tree.

### Usage
First, download the repo and run npm install:
` $ npm install `

To lint the js files you can run eslint:
` $ npm run lint `

To run the mocha chai tests you can run the following script:
` $ npm run test `

### Methods I added:
- Tree.prototype.dataToBuf(target)
    -  Takes an arguemnt of the file to target.
    -  Returns a buffer of the data contained in the target file.

### Methods I modified:
- Tree.prototype.add(data, toData, cb)
    - takes an argument of data, toBuf and a callback.
    - returns a data tree, where the root is the document (html) and subsequent HTML tags, and their text content, will constitute the remainder of the tree.
