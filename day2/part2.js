function part2(data) {
  const reportsWithLevels = data
    .split('\n')
    .map((report) => report.split(' ').map(Number));

  const safeReports = reportsWithLevels.filter((report, i) => {
    const variations = [report];

    for (let i = 0; i < report.length; i++) {
      const variation = [...report];
      variation.splice(i, 1);
      variations.push(variation);
    }

    const correctVariations = variations
      .filter((report) => {
        const copyString = report.toString();

        report.sort((a, b) => a - b);
        const reportStringAsc = report.toString();

        report.sort((a, b) => b - a);
        const reportStringDesc = report.toString();

        return (
          copyString === reportStringAsc || copyString === reportStringDesc
        );
      })
      .filter((report) => {
        let hasCorrectSteps = true;

        report.forEach((level, i) => {
          if (i === 0) return;

          const step = Math.abs(report[i - 1] - level);

          if (step < 1 || step > 3) {
            hasCorrectSteps = false;
          }
        });

        return hasCorrectSteps;
      });

    return !!correctVariations.length;
  });

  return safeReports.length;
}

function checkStep(level, lastLevel, direction) {
  let newDirection;
  if (lastLevel > level) {
    newDirection = 'down';
  } else if (lastLevel < level) {
    newDirection = 'up';
  } else {
    return [false, direction];
  }

  if (!!direction && direction !== newDirection) {
    return [false, direction];
  }

  const step = Math.abs(lastLevel - level);
  const incorrectStep = step < 1 || step > 3;

  if (incorrectStep) {
    return [false, direction];
  }

  return [true, newDirection];
}

module.exports = part2;
