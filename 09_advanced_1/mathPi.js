// Object.getOwnPropertyDescriptor(Math)

console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

const chai = {
  name: "prakhar",
  price: 269,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi ");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  // writable:false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
