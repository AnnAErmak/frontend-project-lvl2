import renderStylish from './stylish.js';
import renderPlain from './plain.js';
import renderJson from './json.js';

export default function format(tree, formatName) {
  switch (formatName) {
    case 'plain':
      return renderPlain(tree);
    case 'json':
      return renderJson(tree);
    case 'stylish':
      return renderStylish(tree);
    default:
      throw new Error(`${formatName} this format cannot be processed`);
  }
}
