function lempar2x(func) {
  func();
  func();
}

function lemparDadu() {
  const nilai = Math.floor(Math.random() * 6) + 1;
  console.log(nilai);
}

lempar2x(lemparDadu);
