// const pilihan = "abcd";

// for (let i = 1; i <= pilihan.length; i++) {
//   console.log(`${i}. Soal nomer ${i}`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`Jawabannya adalah : ${pilihan[j]}`);
//   }
// }

const studentRow = [
  ["olivia", "liam", "emma", "noah"],
  ["amelia", "oliver", "ava", "elijah"],
  ["shopia", "matelo", "isabella", "lucas"],
];

for (let i = 0; i < studentRow; i++) {
  let row = studentRow[i];
  console.log(`Kelas ${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(`   ${j + 1}. ${row[j]}`);
  }
}
