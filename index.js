// import the pets array from data.js
const pets = require('./data');

//import path to be able to add styles to our application via index.html
const path = require("path");

// init express app
const express = require('express');
const app = express();

//initialize port constant 
const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile(__dirname + "/public/index.html");
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets);

});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
     const ownerName = req.query.owner;
    // console.log(ownerName)
    // const pet = pets.filter((pet) => {
    //    return pet.owner.toLowerCase() === owner.toLowerCase();
    // });
    
//     // find the pet in the pets array
const pet = pets.find(pet => pet.owner.toLowerCase() === ownerName.toLowerCase());
    console.log(pet);
//     // send the pet as a response
    res.send(pet);

 });

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
     const petName = req.params.name;
    // find the pet in the pets array
    const pet = pets.find(pet => {
       return  pet.name.toLowerCase() === petName.toLowerCase()
    });
    // send the pet as a response
    res.send(pet);
});

// 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;