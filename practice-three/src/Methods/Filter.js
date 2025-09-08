const products = [
    { "IPhone 16": 1100 },
    { "IPhone 16 pro": 1300 },
    { "IPhone 16 pro max": 1450 },
    { "IPhone 17": 1400 },
    { "IPhone 17 pro": 1500 },
    { "IPhone 17 pro max": 1500 },
];

const filteredProducts = products.filter(product => {
    const [name, price] = Object.entries(product)[0];
    return price > 1200;
});

console.log(filteredProducts);

const arrayOfStrings = ["Automobile", "Mobile", "Phone", "Email", "Plane"];
const result = arrayOfStrings.filter((word) => word.startsWith("A"));
console.log(result);