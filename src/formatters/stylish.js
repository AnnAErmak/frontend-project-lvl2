import _ from 'lodash';

const littelIdent = 2;
const indent = 4;

const getIndent = (depth) => {
  const indentCount = (depth * indent) + littelIdent;
  return ' '.repeat(indentCount);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return data;
  }
  if (data === ' ') {
    return ' ';
  }
  const keys = Object.keys(data);
  const sortKeys = _.sortBy(keys);
  const result = sortKeys.map((key) => `${getIndent(depth + 1)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return `{\n${result.join('\n')}\n${' '.repeat((depth + 1) * indent)}}`;
};

export default function renderStylish(tree) {
  function getNesting(data, depth) {
    console.log(data);
    const result = data.map((node) => {
      switch (node.type) {
        case 'unchanged':
          return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth)}`;
        case 'added':
          return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
        case 'removed':
          return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
        case 'changed': {
          const oldValue = `${getIndent(depth)}- ${node.key}: ${stringify(node.oldValue, depth)}`;
          const newValue = `${getIndent(depth)}+ ${node.key}: ${stringify(node.newValue, depth)}`;
          return `${oldValue}\n${newValue}`;
        }
        case 'nested':
          return `${getIndent(depth)}  ${node.key}: ${getNesting(node.children, depth + 1)}`;
        default:
          throw new Error(`${node.type} this format cannot be processed`);
      }
    });
    return `{\n${result.join('\n')}\n${' '.repeat(depth * indent)}}`;
  }
  return getNesting(tree, 0);
}
