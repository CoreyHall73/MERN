const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.password = faker.random.alphaNumeric(8);
        this.email = faker.random.alphaNumeric(8);
        this.phoneNumber = faker.random.alpha(10);
        this.lastName = faker.random.alpha(6);
        this.firstName = faker.random.alpha(6);
    }
}

const newUser = new User();
console.log(newUser);


