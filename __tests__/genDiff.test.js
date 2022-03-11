import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixstures__', filename);

test('check diff JSON', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');
  const comparison = genDiff(file1Path, file2Path);
  const result = '{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}';
  expect(comparison).toBe(result);
});
test('check diff yaml', () => {
  const file1Path = getFixturePath('file1.yml');
  const file2Path = getFixturePath('file2.yml');
  const comparison = genDiff(file1Path, file2Path);
  const result = '{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}';
  expect(comparison).toBe(result);
});
