// console.log("halo masih disana ? "); //dia satu kali return dan menunggu sesuai waktu yang di tentukan
// setTimeout(() => {
//   console.log("apakah masih disana ?");
// }, 3000);

// const random = 3;
// for (let i = 1; i <= random; i++) {
//   console.log(Math.random());
// }

const interval = setInterval(() => {
  const nilai = Math.random() * 6 + 1;
  console.log(nilai);
  if (nilai < 5) {
    console.log("kamu gagal");
  } else {
    console.log("kamu lulus");
    clearInterval(interval);
  }
}, 2000);
