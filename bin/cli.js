#!/usr/bin/env node
import minimist from "minimist";
import { roll } from "/lib/roll.js"

const args = minimist(process.argv.slice(2));

let sides = args.sides;
let dice = args.dice;
let rolls = args.rolls;

let output = roll(sides, dice, rolls);