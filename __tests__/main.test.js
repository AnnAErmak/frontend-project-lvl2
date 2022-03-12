import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import getData from '../src/main.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixstures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const plain = readFixture('plain.txt');
const stylish = readFixture('stylish.txt');
const json = readFixture('json.txt');

test('differences tree json', () => {
  const file1Path = getFixturePath('fileTree1.yml');
  const file2Path = getFixturePath('fileTree2.yml');
  const comparison = getData(file1Path, file2Path, 'json');
  expect(comparison).toBe(json);
});
test('differences tree plain', () => {
  const file1Path = getFixturePath('fileTree1.yml');
  const file2Path = getFixturePath('fileTree2.yml');
  const comparison = getData(file1Path, file2Path, 'plain');
  expect(comparison).toBe(plain);
});
test('differences tree stylish', () => {
  const file1Path = getFixturePath('fileTree1.yml');
  const file2Path = getFixturePath('fileTree2.yml');
  const comparison = getData(file1Path, file2Path);
  expect(comparison).toBe(stylish);
});
