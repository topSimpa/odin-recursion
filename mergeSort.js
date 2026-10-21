#!/usr/bin/env node
//merge application
import mergeSort from "./merge-sort.js";

const arr = process.argv.slice(2);

console.log(`Result: ${mergeSort(arr)}`);
