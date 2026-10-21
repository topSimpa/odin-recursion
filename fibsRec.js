#!/usr/bin/env node
//fibsRec application
import { fibsRec } from "./fibonnaci.js";

const input = process.argv[2];
const terms = Number(input);

console.log(`Result: ${fibsRec(terms)}`);
