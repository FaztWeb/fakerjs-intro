const faker = require('faker');

const number = faker.random.number();
const uuid = faker.random.uuid();
const image = faker.random.image();
const word = faker.random.word();
const words = faker.random.words(10);

console.log({number});
console.log({uuid});
console.log({image});
console.log({word});
console.log({words});