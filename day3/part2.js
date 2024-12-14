function part2(data) {
  const regex = /mul\(\d+,\d+\)/g;

  const matches = [...data.matchAll(regex)];

  let result = 0;

  const regexDo = /do\(\)/g;
  const doIndexes = [...data.matchAll(regexDo)]
    .map((i) => i.index)
    .sort((a, b) => b - a);

  const regexDont = /don't\(\)/g;
  const dontIndexes = [...data.matchAll(regexDont)]
    .map((i) => i.index)
    .sort((a, b) => b - a);

  matches.forEach((match) => {
    const firstPrevDoIndex = doIndexes.find((i) => i < match.index);
    const firstPrevDontIndex = dontIndexes.find((i) => i < match.index);

    if (
      firstPrevDontIndex === undefined ||
      firstPrevDoIndex > firstPrevDontIndex
    ) {
      const noMul = match[0].replace('mul(', '');
      const stripped = noMul.replace(')', '');
      const [left, right] = stripped.split(',');
      result = result + Number(left) * Number(right);
    }
  });

  return result;
}

module.exports = part2;
