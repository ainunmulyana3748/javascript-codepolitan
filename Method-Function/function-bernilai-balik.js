function nilai() {
  const nilai = Math.random();
  if (nilai > 0.5) {
    return function success() {
      console.log("selamat kamu lulus");
    };
  } else {
    return function failed() {
      console.log("maaf kamu gagal");
    };
  }
}

const hasil = nilai();
hasil();
