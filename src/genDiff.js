import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

export default function genDiff(filepath1, filepath2) {
  const pathFile1 = path.resolve(filepath1);
  const pathFile2 = path.resolve(filepath2);

  const rawDataFile1 = readFileSync(pathFile1, 'utf8');
  const rawDataFile2 = readFileSync(pathFile2, 'utf8');
  const dataFile1 = JSON.parse(rawDataFile1);
  const dataFile2 = JSON.parse(rawDataFile2);
  const keysFile1 = Object.keys(dataFile1);
  const keysFile2 = Object.keys(dataFile2);
  for (const item of keysFile2) {
    keysFile1.push(item);
  }
  const unicKeys = _.uniq(keysFile1);
  const sortKeys = _.sortBy(unicKeys);
  let result = '{\n';
  for (const key of sortKeys) {
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      if (dataFile1[key] !== dataFile2[key]) {
        result += ` - ${key}: ${dataFile1[key]}\n + ${key}: ${dataFile2[key]}\n`;
      } else {
        result += `   ${key}: ${dataFile1[key]}\n`;
      }
    }
    if (Object.hasOwn(dataFile1, key) && !(Object.hasOwn(dataFile2, key))) {
      result += ` - ${key}: ${dataFile1[key]}\n`;
    }
    if (!(Object.hasOwn(dataFile1, key)) && Object.hasOwn(dataFile2, key)) {
      result += ` + ${key}: ${dataFile2[key]}\n`;
    }
  }
  result += '}';
  return result;
}
