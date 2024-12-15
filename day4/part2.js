function part2(data) {
  const dataRows = data.split('\n');

  let count = 0;

  for (let rowI = 0; rowI < dataRows.length; rowI++) {
    for (let charI = 0; charI < dataRows[rowI].length; charI++) {
      const char = dataRows?.[rowI]?.[charI];

      if (char !== 'A') {
        continue;
      }

      const topLeftChar = dataRows?.[rowI - 1]?.[charI - 1];
      const topRightChar = dataRows?.[rowI - 1]?.[charI + 1];
      const bottomLeftChar = dataRows?.[rowI + 1]?.[charI - 1];
      const bottomRightChar = dataRows?.[rowI + 1]?.[charI + 1];

      if (
        (topLeftChar === 'M' && bottomRightChar === 'S') ||
        (topLeftChar === 'S' && bottomRightChar === 'M')
      ) {
        if (
          (topRightChar === 'M' && bottomLeftChar === 'S') ||
          (topRightChar === 'S' && bottomLeftChar === 'M')
        ) {
          count++;
        }
      }
    }
  }

  return count;
}

module.exports = part2;
