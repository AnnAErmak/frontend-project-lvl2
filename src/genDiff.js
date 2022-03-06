import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

export default function (filepath1, filepath2) {
  const pathFile1 = path.resolve(filepath1);
  const pathFile2 = path.resolve(filepath2);
  const rawDataFile1 = readFileSync(pathFile1, 'utf8');
  const rawDataFile2 = readFileSync(pathFile2, 'utf8');
  const dataFile1 = JSON.parse(rawDataFile1);
  const dataFile2 = JSON.parse(rawDataFile2);
  const arrF1 = Object.keys(dataFile1);
  const arrF2 = Object.keys(dataFile2);
  for (const item of arrF2) {
    arrF1.push(item);
  }
  const unicArr = _.uniq(arrF1);
  const sortArr = _.sortBy(unicArr);
  const resObj = {};
  for (const key of sortArr) {
    console.log(dataFile1[key]);
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      if (dataFile1[key] !== dataFile2[key]) {
        resObj[` - ${key}`] = dataFile1[key];
        resObj[` + ${key}`] = dataFile2[key];
      } else {
        resObj[key] = dataFile1[key];
      }
    }
    if (Object.hasOwn(dataFile1, key) && !(Object.hasOwn(dataFile2, key))) {
      resObj[` - ${key}`] = dataFile1[key];
    }
    if (!(Object.hasOwn(dataFile1, key)) && Object.hasOwn(dataFile2, key)) {
      resObj[` + ${key}`] = dataFile2[key];
    }
  }
  return resObj;
}
