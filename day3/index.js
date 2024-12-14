const fs = require('fs');
const puzzleInput = fs.readFileSync('input.txt').toString();

const part1 = require('./part1');
const part2 = require('./part2');

console.log('day [], part 1 answer:', part1(puzzleInput));
console.log('day [], part 2 answer:', part2(puzzleInput));
