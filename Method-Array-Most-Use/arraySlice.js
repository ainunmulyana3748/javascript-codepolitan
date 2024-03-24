const animal = ["kucing", "kambing", "sapi", "anjing", "singa", "buaya"];

// 2 parameter, pertama index yang ingin di slice, kedua berapa index yang ingin di ambil
console.log(animal.slice(1, 5)); // kambing, sapi, anjing, singa
console.log(animal.slice(3, 4)); // anjing
console.log(animal.slice(2, 4)); // sapi, anjing
console.log(animal.slice(3, 5)); // anjing, singa
