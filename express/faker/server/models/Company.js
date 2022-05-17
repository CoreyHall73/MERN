const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.random.alphaNumeric(8);
        this.address = {
            street: faker.random.alphaNumeric(8),
            city: faker.random.alpha(8),
            state: faker.random.alpha(8)
            zipCode: faker.rando.alphaNumeric(6) ,
            country: faker.random.alpha(8)
        }
    }
}

const newCompany = new Company();