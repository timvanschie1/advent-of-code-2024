function part1(data) {
  const [rules, updatesString] = data.split('\n\n');

  const updates = updatesString.split('\n');

  const pageNrsToAdd = [];

  updates.forEach((update) => {
    let isCorrect = true;

    const pageNumbers = update.split(',');

    pageNumbers.forEach((pageNr) => {
      const rulesOccurrences = rules.split(pageNr + '|');
      const indexOfPageNr = update.indexOf(pageNr);

      rulesOccurrences.forEach((part, i) => {
        if (i === 0) return;
        if (!isCorrect) return;

        const afterRuleNr = part[0] + part[1];

        const indexOfAfterRuleNr = update.indexOf(afterRuleNr);

        if (indexOfAfterRuleNr === -1) {
          return;
        }

        if (indexOfPageNr > indexOfAfterRuleNr) {
          isCorrect = false;
        }
      });
    });

    if (isCorrect) {
      const nrToAdd = pageNumbers[(pageNumbers.length - 1) / 2];
      pageNrsToAdd.push(Number(nrToAdd));
    }
  });

  return pageNrsToAdd.reduce((acc, nr) => acc + nr, 0);
}

module.exports = part1;
