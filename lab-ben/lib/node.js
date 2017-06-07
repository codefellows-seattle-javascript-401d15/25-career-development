'use strict';

module.exports = function(val) {
  this.val = {
    elementType: val.elementType,
    textContent: val.textContent,
  };
  this.children = [];
};
