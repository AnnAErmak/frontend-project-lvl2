import _ from 'lodash';

export default function buildDiffAST(obj1, obj2) {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortKeys = _.sortBy(keys);
  return sortKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, value: obj2[key], type: 'added' };
    }
    if (!_.has(obj2, key)) {
      return { key, value: obj1[key], type: 'removed' };
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, children: buildDiffAST(obj1[key], obj2[key]), type: 'nested' };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, oldValue: obj1[key], newValue: obj2[key], type: 'changed',
      };
    }
    return { key, value: obj1[key], type: 'unchanged' };
  });
}
