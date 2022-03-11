import format from './formatters/index.js';
import getResultCompare from './compare.js';

export default function genDiff(obj1, obj2, formatName) {
  const tree = getResultCompare(obj1, obj2);
  return format(tree, formatName);
  // return result;
}
