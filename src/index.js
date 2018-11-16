const getParamByName = function(search, url = window.location.href) {
  const name = search.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = getParamByName;
} else if (typeof define === 'function' && define.amd) {
  define('getParamByName', [], function(require, exports, module) {
    return getParamByName;
  });
}
