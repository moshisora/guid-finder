#!/usr/bin/env node

'use strict';

const program = require('commander');
const search = require('./search.js');

program
    .version('0.0.1')
    .option('-g, --guid <n>', 'guid of target file')
    .option('-p, --path <n>', 'path to search')
    .parse(process.argv);

search(program.guid, program.path);
