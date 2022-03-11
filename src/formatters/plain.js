import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (_.isString(data)) {
    return `'${data}'`;
  }
  return data;
};

export default function renderPlain(tree) {
  const getNesting = (dataTree, descendants = '') => {
    const filteredTree = dataTree.filter((item) => item.type !== 'unchanged');
    const result = filteredTree.map((obj) => {
      const property = descendants ? `${descendants}.${obj.key}` : obj.key;
      const newValue = stringify(obj.value);
      switch (obj.type) {
        case 'added':
          return `Property '${property}' was added with value: ${newValue}`;
        case 'removed':
          return `Property '${property}' was removed`;
        case 'changed':
          return `Property '${property}' was updated. From ${stringify(obj.oldValue)} to ${stringify(obj.newValue)}`;
        case 'nested':
          return getNesting(obj.children, property);
        // case 'unchanged':
        //   return null;
        default:
          throw new Error(`${obj.type} is not defined`);
      }
    });

    return result.join('\n');
  };

  return getNesting(tree);
}
