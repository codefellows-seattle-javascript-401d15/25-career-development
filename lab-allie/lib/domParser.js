'use strict';

module.exports = function DOMParser() {  
  var DOMParser_proto = DOMParser.prototype  
  , real_parseFromString = DOMParser_proto.parseFromString;
    
  DOMParser_proto.parseFromString = function(markup, type) {  
    if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {  
      var doc = document.implementation.createHTMLDocument('')
      , doc_elt = doc.documentElement
      , first_elt;
      
      doc_elt.innerHTML = markup;
      first_elt = doc_elt.firstElementChild;
      
      if (doc_elt.childElementCount === 1
        && first_elt.localName.toLowerCase() === 'html') {  
        doc.replaceChild(first_elt, doc_elt); 
      }  
        
      return doc;  
    } else {  
      return real_parseFromString.apply(this, arguments);  
    }  
  };  
  
}