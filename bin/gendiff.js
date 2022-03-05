#!/usr/bin/env node
import { program } from "commander";

program
    .name("gendiff")
    .usage("[options] <filepath1> <filepath2>")
    .description('Compares two configuration files and shows a difference.')
    .arguments('<username> <password>')
    .option('-V, --version', 'output the version number')
    .option('-h, --help', 'output usage information')
    .option('-f, --format <type>',  'output format')

program.help()