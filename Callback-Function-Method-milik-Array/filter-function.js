// const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const lulus = nilai.filter((n) => {
//   return n > 6;
// });

// console.log(lulus);

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

const ratingAnime = animes.filter((anime) => {
  return anime.rating > 8;
});

console.log(ratingAnime);
