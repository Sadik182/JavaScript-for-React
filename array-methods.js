// Map

const products = [
    { name: 'Phone', price: 2000, brand: 'Samsung', colour: 'Black' },
    { name: 'watch', price: 200, brand: 'Casio', colour: 'Black' },
    { name: 'Laptop', price: 300000, brand: 'Apple', colour: 'Navy' },
    { name: 'Car', price: 5000000, brand: 'Honda', colour: 'White' }
]

// Map
const brandsName = products.map(product => product.brand);
console.log(brandsName);

const productsName = products.map(pName => pName.name);
console.log(productsName);


