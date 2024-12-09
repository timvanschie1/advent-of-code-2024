const {test, expect} = require("@jest/globals");
const part1 = require('./part1');
const part2 = require('./part2');

const testData =
  `3   4
4   3
2   5
1   3
3   9
3   3`

test('day 1, part 1', () => expect(part1(testData)).toBe(11));
test('day 1, part 2', () => expect(part2(testData)).toBe(31));