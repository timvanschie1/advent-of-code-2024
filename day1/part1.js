const {getLeftAndRightList} = require("./getLeftAndRightList");

function part1(data) {
  const [left, right] = getLeftAndRightList(data);

  left.sort();
  right.sort();

  let totalDistance = 0;

  left.forEach((_, i) => {
    const difference = left[i] - right[i];
    totalDistance = totalDistance + Math.abs(difference);
  })

  return totalDistance;
}

module.exports = part1;