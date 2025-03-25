const products = [
  { name: "Laptop", price: 2500, colur: "Black", brand: "Apple" },
  { name: "Phone", price: 500, colur: "Navy", brand: "Samsung" },
  { name: "Watch", price: 250, colur: "White", brand: "Casio" },
  { name: "Camera", price: 100, colur: "Yello", brand: "Sony" },
];

// 1. Map

const prices = products.map((product) => product.price);
console.log(prices);
const names = products.map((product) => product.name);
console.log(names);

// 2. forEach

products.forEach((product) => console.log(product.colur));

products.forEach((product) => {
  if (product.price > 2000) {
    console.log(product);
  }
});

// 3. Filter

const brands = products.filter((product) => product.price < 2000);
console.log(brands);

const specificName = products.filter((product) => product.name.includes("P"));
console.log("Names with latter p",specificName);
