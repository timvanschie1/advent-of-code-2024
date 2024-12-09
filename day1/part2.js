const {getLeftAndRightList} = require("./getLeftAndRightList");

function part2(data) {
  const [left, right] = getLeftAndRightList(data);

  left.sort();
  right.sort();

  const rightSet = new Set(right);
  const dict = new Map([...rightSet].map(nr => [nr, right.filter(number => number === nr).length]));

  let similarityScore = 0;

  left.forEach((nr) => {
    const amount = dict.get(nr);

    if (amount !== undefined) {
      similarityScore = similarityScore + (nr * amount);
    }
  })

  return similarityScore;
}

module.exports = part2;