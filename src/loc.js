/* eslint-disable no-nested-ternary, no-param-reassign, no-underscore-dangle, operator-linebreak */

function getLast(arr) {
  return arr.length > 0 ? arr[arr.length - 1] : null;
}

function locStart(node) {
  if (
    node.declaration &&
    node.declaration.decorators &&
    node.declaration.decorators.length > 0
  ) {
    return locStart(node.declaration.decorators[0]);
  }
  if (node.decorators && node.decorators.length > 0) {
    return locStart(node.decorators[0]);
  }

  if (node.__location) {
    return node.__location.startOffset;
  }
  if (node.range) {
    return node.range[0];
  }
  if (typeof node.start === 'number') {
    return node.start;
  }
  if (node.loc) {
    return node.loc.start;
  }
  return null;
}

function locEnd(node) {
  const endNode = node.nodes && getLast(node.nodes);
  if (endNode && node.source && !node.source.end) {
    node = endNode;
  }

  if (node.__location) {
    return node.__location.endOffset;
  }

  const loc = node.range
    ? node.range[1]
    : typeof node.end === 'number'
      ? node.end
      : null;

  if (node.typeAnnotation) {
    return Math.max(loc, locEnd(node.typeAnnotation));
  }

  if (node.loc && !loc) {
    return node.loc.end;
  }

  return loc;
}

module.exports = {
  locStart,
  locEnd
};
