'use strict';

const htmlParser = require('./lib/html-parser');

htmlParser()
.then(tags => {

  console.log(tags);
})
.catch(console.error);
