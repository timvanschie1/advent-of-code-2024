const { test, expect } = require('@jest/globals');
const part1 = require('./part1');
const part2 = require('./part2');

const testData = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

test('day 4, part 1', () => expect(part1(testData)).toBe(18));
test('day 4, part 2', () => expect(part2(testData)).toBe(9));
