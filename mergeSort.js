#!/usr/bin/env node
//merge application
import mergeSort from "./merge-sort.js";

const input = process.argv.slice(2);
const arr = input.map((item) => Number(item));

console.log(`Result: ${mergeSort(arr)}`);
