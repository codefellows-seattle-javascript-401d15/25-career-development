'use strict';

module.exports = function() {
  let values;
  return new Promise((resolve, reject) => {
    require('fs').readFile(`${__dirname}/../assets/minimal.html`, (err, data) => {
      if (err) reject(err);
      data = Buffer.from(data);
      data = data.toString().split('\n');
      data = data.slice(data.indexOf('<html>'), data.indexOf('</html>') + 1);
      data.forEach((tag, i) => {
        let depth = tag.slice(0, tag.indexOf('<')).length / 2;
        tag = Array.from(tag);
        console.log(tag);
        tag = tag.slice(tag.indexOf('<'), tag.length).join('');
        data[i] = tag;
        // console.log(depth);
        console.log(tag);
        if (data[i].indexOf('/') === 1) data.splice(i, 1);
      });
      resolve(data);
    });
  });
};
