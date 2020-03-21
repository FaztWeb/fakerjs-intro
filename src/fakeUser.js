const faker = require('faker');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

const jobTitle = faker.name.jobTitle();
const prefix = faker.name.prefix();
const sufix = faker.name.suffix();
const jobArea = faker.name.jobArea();

const phone = faker.phone.phoneNumber();

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${sufix}`)
console.log(`Job Title: ${jobTitle}`);
console.log(`JobArea: ${jobArea}`);
console.log(`Phone: ${phone}`);
