"use strict";

var getParamByName = function getParamByName(search) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var name = search.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = getParamByName;
} else if (typeof define === 'function' && define.amd) {
  define('getParamByName', [], function (require, exports, module) {
    return getParamByName;
  });
}