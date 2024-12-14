const { test, expect } = require('@jest/globals');
const part1 = require('./part1');
const part2 = require('./part2');

const testData1 =
  'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

const testData2 =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

test('day 3, part 1', () => expect(part1(testData1)).toBe(161));
test('day 3, part 2', () => expect(part2(testData2)).toBe(48));
