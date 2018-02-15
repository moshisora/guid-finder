#!/usr/bin/env node

'use strict';

const program = require('commander');
const config = require('./package.json')
const Finder = require('./finder.js');

program
    .version(config.version)
    .option('-g, --guid <n>', 'guid of target file')
    .option('-p, --path <n>', 'path to search')
    .parse(process.argv);

if (program.guid == null) {
    console.log('guid option is necessary.');
    return;
}

let finder = new Finder();
finder.getReferences(program.guid, program.path);
