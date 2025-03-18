function getAverage(scores) {
 if (scores.length === 0) {
    return 0;
  }

var sumaNotas = scores.reduce((a, b) => a + b, 0);
return sumaNotas / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  if (score === 100) return "A++";
    else if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
console.log(getGrade(100));
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
  return getGrade(score) !== 'F';
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
  let actualAverage = getAverage(totalScores);
  let actualGrade = getGrade(studentScore);
  return `Class average: ${actualAverage}. Your grade: ${actualGrade}. You ${hasPassingGrade(studentScore) ? "passed" : "failed"} the course.`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
