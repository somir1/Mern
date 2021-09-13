const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');

class User {
    constructor(){
        this._id = faker.datatype.uuid()
        this.fname = faker.name.firstName()
        this.lname = faker.name.lastName()
        this.phone = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = faker.address.streetAddress() + " " + faker.address.cityName() + ", " + faker.address.stateAbbr() + ", " + faker.address.zipCode() + " " + faker.address.country()
    }
}


console.log(new User())
console.log(new Company())
console.log(new User())
console.log(new Company())

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    let newUser = new User()
    res.json({ data: newUser });
});

app.get("/api/companies/new", (req, res) => {
    let newComps = new Company()
    res.json({ data: newComps });
});

app.get("/api/user/company", (req, res) => {
    let newComps = new Company()
    let newUser = new User()
    res.json({ User: newComps, Company: newUser });
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
