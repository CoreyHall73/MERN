const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.password = faker.random.alphaNumeric(8);

    }
}

const newUser = new User();
console.log(newUser);


