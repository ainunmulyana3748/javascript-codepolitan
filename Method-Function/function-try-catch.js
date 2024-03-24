function teriakan(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch {
    console.log("inputan harus berupa string");
  }
}
teriakan(123123);
