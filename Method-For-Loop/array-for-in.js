const studentsScore = {
  khalid: 20,
  ali: 21,
  usman: 22,
  khadijah: 22,
  aisha: 23,
};

// for (let student in studentsScore) {
//   console.log(`${student} mendapat kan score : ${studentsScore[student]} `);
// }

let total = 0;
let scores = Object.values(studentsScore);

for (let score in scores) {
  total += score;
}

console.log(total / scores.length);
