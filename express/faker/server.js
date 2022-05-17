const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

// User Class
class User {
    constructor() {
        this.id = faker.datatype.number(),
        this.password = faker.internet.password(),
        this.email = faker.internet.email(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.lastName = faker.name.lastName(),
        this.firstName = faker.name.firstName()
    }
}
// Company Class
class Company {
    constructor() {
        this.id = faker.datatype.number(),
        this.name = faker.company.companyName(),
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// Middlewear
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.get("/api/user/new", (req, res) => {
    res.json({ user: new User() });
});

app.get("/api/company/new", (req, res) => {
    res.json({ company: new Company()});
});
app.get("/api/user/company/new", (req, res) => {
    res.json({ user: new User(), company: new Company() });
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );
