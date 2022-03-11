import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import getData from '../src/main.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixstures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

// const stylish = readFixture('stylish.txt');
// const plain = readFixture('plain.txt');
const json = readFixture('json.txt');

test('differences tree yaml', () => {
  const file1Path = getFixturePath('fileTree1.yml');
  const file2Path = getFixturePath('fileTree2.yml');
  const comparison = getData(file1Path, file2Path, 'json');
  expect(comparison).toBe(json);
});

test('check diff JSON', () => {
  const file1Path = getFixturePath('file1.json');
  const file2Path = getFixturePath('file2.json');
  const comparison = getData(file1Path, file2Path);
  const result = '{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}';
  expect(comparison).toBe(result);
});
test('check diff yaml', () => {
  const file1Path = getFixturePath('file1.yml');
  const file2Path = getFixturePath('file2.yml');
  const comparison = getData(file1Path, file2Path);
  const result = '{\n - follow: false\n   host: hexlet.io\n - proxy: 123.234.53.22\n - timeout: 50\n + timeout: 20\n + verbose: true\n}';
  expect(comparison).toBe(result);
});
