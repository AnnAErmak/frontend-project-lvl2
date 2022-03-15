import yaml from 'js-yaml';

export default function parse(data, type) {
  switch (type) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`${type} this format cannot be processed`);
  }
}
