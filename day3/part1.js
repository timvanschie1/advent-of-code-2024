function part1(data) {
  const regex = /mul\(\d+,\d+\)/g;

  const matches = data.match(regex);

  let result = 0;

  matches.forEach((match) => {
    const noMul = match.replace('mul(', '');
    const stripped = noMul.replace(')', '');
    const [left, right] = stripped.split(',');
    result = result + Number(left) * Number(right);
  });

  return result;
}

module.exports = part1;
