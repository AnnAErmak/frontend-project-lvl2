import yaml from 'js-yaml';

export default function parser(data, format) {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`${format} this format cannot be processed`);
  }
}
