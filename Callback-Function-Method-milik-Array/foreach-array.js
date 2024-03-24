// const angka = [1, 2, 3, 4, 5];

// angka.forEach(function (a) {
//   //fungsi foreach untuk memanggil array satu persatu
//   if (a % 2 == 0) {
//     console.log(a * 2);
//   } else {
//     console.log(a);
//   }
// });

const animes = [
  {
    name: "Naruto",
    genre: "action",
    rating: 9,
  },
  {
    name: "Dragon Ball",
    genre: "action",
    rating: 8,
  },
  {
    name: "One Piece",
    genre: "action",
    rating: 10,
  },
  {
    name: "Attack on Titan",
    genre: "action",
    rating: 8,
  },
];

animes.forEach(function (anime) {
  console.log(
    `anime ${anime.name} - genre ${anime.genre} - rating ${anime.rating}`
  );
});
