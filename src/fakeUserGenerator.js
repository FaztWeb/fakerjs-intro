const faker = require("faker");
const fs = require("fs");

function generateUsers() {
  let users = [];
  for (let id = 1; id <= 100; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    users.push({
      id: id,
      firstname: firstName,
      lastname: lastName,
      email: email
    });
  }

  return { data: users };
}

const generatedData = generateUsers();

fs.writeFileSync("data.json", JSON.stringify(generatedData, null, "\t"));
