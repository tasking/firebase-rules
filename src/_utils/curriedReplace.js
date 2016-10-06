module.exports = function curriedReplace(substr, newSubstr) {
  return function (target) {
    return (typeof target !== 'function') ?
      target.replace(substr, newSubstr) :
      function () {
        const args = Array.from(arguments);
        return target(...args).replace(subtr, newSubstr);
      }
  }
}