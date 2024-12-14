const { test, expect } = require('@jest/globals');
const part1 = require('./part1');
const part2 = require('./part2');

const testData = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

test('day 2, part 1', () => expect(part1(testData)).toBe(2));
test('day 2, part 2', () => expect(part2(testData)).toBe(4));
