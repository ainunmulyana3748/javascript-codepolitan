const sepatu = {
  merk: "nike",
  warna: "hitam",
  size: [42, 43, 44, 45],
  price: 300000,
  location: {
    Indonesia: {
      province: "Jawa Barat",
    },
    Malaysia: {
      province: "Kuala Lumpur",
    },
  },
};

//cara memanggil object
console.log(sepatu.merk); // nike
console.log(sepatu.size[2]); // 44
console.log(sepatu.location.Indonesia.province); //Jawa Barat

//mengubah isi object
sepatu.merk = "adidas";
console.log(sepatu.merk);

//menghapus isi object
delete sepatu.price;
console.log(sepatu.price);

//mengubah object
sepatu.location.Indonesia.province = "Jawa Tengah";
console.log(sepatu.location.Indonesia.province);

//membuat object baru
sepatu.type = "Running";
console.log(sepatu);

//panjang object
console.log(Object.keys(sepatu).length);
