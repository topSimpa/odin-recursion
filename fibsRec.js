#!/usr/bin/env node
//fibsRec application
import { fibsRec } from "./fibonnaci.js";

const terms = process.argv[2];

console.log(`Result: ${fibsRec(terms)}`);
