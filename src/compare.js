import _ from 'lodash';

export default function getResultCompare(obj1, obj2) {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortKeys = _.sortBy(keys);
  const newObj = sortKeys.map((key) => {
    if (!(Object.hasOwn(obj1, key))) {
      return { key, value: obj2[key], type: 'added' };
    }
    if (!(Object.hasOwn(obj2, key))) {
      return { key, value: obj1[key], type: 'removed' };
    }
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      return { key, children: getResultCompare(obj1[key], obj2[key]), type: 'nested' };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key, oldValue: obj1[key], newValue: obj2[key], type: 'changed',
      };
    }
    return { key, value: obj1[key], type: 'unchanged' };
  });
  return newObj;
}
