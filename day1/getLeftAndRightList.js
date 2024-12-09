function getLeftAndRightList(data) {
  const left = [];
  const right = [];

  data.split('\n').forEach(line => {
    const [forLeft, forRight] = line.split('   ');
    left.push(Number(forLeft));
    right.push(Number(forRight));
  })

  return [left, right];
}

module.exports = {getLeftAndRightList}