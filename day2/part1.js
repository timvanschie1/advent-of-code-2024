function part1(data) {
  const reportsWithLevels = data.split('\n').map(report => report.split(' ').map(Number));

  const safeReports = reportsWithLevels
    .filter(report => {
      const copyString = report.toString();

      report.sort((a, b) => a - b);
      const reportStringAsc = report.toString();

      report.sort((a, b) => b - a);
      const reportStringDesc = report.toString();

      return (copyString === reportStringAsc) || (copyString === reportStringDesc);
    })
    .filter(report => {
      let hasCorrectSteps = true;

      report.forEach((level, i) => {
        if (i === 0) return;

        const step = Math.abs(report[i - 1] - level);

        if ((step < 1) || (step > 3)) {
          hasCorrectSteps = false;
        }
      })

      return hasCorrectSteps;
    })

  return safeReports.length;
}

module.exports = part1;