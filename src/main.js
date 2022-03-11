import { readFileSync } from 'fs';
import path from 'path';
import parser from './parsers.js';
import genDiff from './genDiff.js';

export default function getData(filepath1, filepath2, format = 'stylish') {
  const pathFile1 = path.resolve(filepath1);
  const pathFile2 = path.resolve(filepath2);
  const rawDataFile1 = readFileSync(pathFile1, 'utf8');
  const rawDataFile2 = readFileSync(pathFile2, 'utf8');
  const dataFile1 = parser(rawDataFile1, path.extname(pathFile1).slice(1));
  const dataFile2 = parser(rawDataFile2, path.extname(pathFile2).slice(1));
  return genDiff(dataFile1, dataFile2, format);
}
