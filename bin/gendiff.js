#!/usr/bin/env node
import { program } from 'commander';
import getData from '../src/main.js';

program
  .version('1.0.0')
  .name('gendiff')
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format [stylish, plain, json]', 'stylish')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'path to file2')
  .action((filepath1, filepath2) => {
    console.log(getData(filepath1, filepath2, program.opts().format));
  });

program.parse();
