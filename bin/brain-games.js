#!/usr/bin/env node

import * as requestName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = requestName();
console.log(`Hello, ${name}`);
