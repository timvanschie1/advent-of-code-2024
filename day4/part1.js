function part1(data) {
  const dataRows = data.split('\n');

  const horizontal = dataRows.reduce((acc, row) => acc + '.' + row, '');

  let vertical = '';
  for (let i = 0; i < dataRows[0].length; i++) {
    dataRows.forEach((row) => {
      vertical = vertical + row[i];
    });

    vertical = vertical + '.';
  }

  const diagonalLeftRight = getDiagonalCharacters(dataRows);

  const reversedDataRows = dataRows.map((row) =>
    row.split('').reverse().join(''),
  );

  const diagonalRightLeft = getDiagonalCharacters(reversedDataRows);

  let count = 0;

  [horizontal, vertical, diagonalLeftRight, diagonalRightLeft].forEach(
    (direction) => {
      count = count + direction.split('XMAS').length - 1;
      count = count + direction.split('SAMX').length - 1;
    },
  );

  return count;
}

function getDiagonalCharacters(dataRows) {
  let diagonalChars = '';

  const firstRow = dataRows[0];

  for (let i = 0; i < firstRow.length; i++) {
    let isEnd = false;
    let rowIndex = 0;
    let colIndex = i;

    while (!isEnd) {
      const char = dataRows?.[rowIndex]?.[colIndex];

      if (char === undefined) {
        isEnd = true;
      } else {
        diagonalChars = diagonalChars + char;
        rowIndex++;
        colIndex++;
      }
    }

    diagonalChars = diagonalChars + '.';
  }

  for (let i = 1; i < dataRows.length; i++) {
    let isEnd = false;
    let rowIndex = i;
    let colIndex = 0;

    while (!isEnd) {
      const char = dataRows?.[rowIndex]?.[colIndex];

      if (char === undefined) {
        isEnd = true;
      } else {
        diagonalChars = diagonalChars + char;
        rowIndex++;
        colIndex++;
      }
    }

    diagonalChars = diagonalChars + '.';
  }

  return diagonalChars;
}

module.exports = part1;
