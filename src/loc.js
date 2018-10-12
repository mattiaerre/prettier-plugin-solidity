// see: https://github.com/prettier/prettier/blob/master/src/language-js/loc.js

const getRange = (index, node) => {
  if (node.range) {
    return node.range[index];
  }
  if (node.expression.range) {
    return node.expression.range[index];
  }
  return null;
};

module.exports = {
  locEnd: node => getRange(1, node),
  locStart: node => getRange(0, node)
};