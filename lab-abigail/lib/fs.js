'use strict';

const fs = require(fs);
const minimal = require('../assets/minimal.html');

module.exports = function(path, callback) {

  fs.readFileSync(path, (err, data) => {
    if (err) throw err;
    let treeData = data.toString('utf-8');
    return treeData;
  });
};
