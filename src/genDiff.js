import format from './formatters/index.js';
import buildDiffAST from './buildDiffAST.js';

export default function genDiff(obj1, obj2, formatName) {
  const tree = buildDiffAST(obj1, obj2);
  return format(tree, formatName);
}
