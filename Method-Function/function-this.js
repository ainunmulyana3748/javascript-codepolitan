const saya = {
  name: "khalid",
  umur: 22,
  kenalan: function () {
    return `halo, nama saya ${this.name} dan umur saya ${this.umur}`;
  },
};

console.log(saya.kenalan());
