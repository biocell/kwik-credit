const express = require('express');
const router = express.Router();
const http = require('http');
const fs = require('fs');
const db = [];


router.post('/register', (req, res) => {
    const user = req.body;
    const register = JSON.stringify(user);
    const email = user.email;
    const first_name = user.first_name;
    const last_name = user.last_name;
    const password = user.password;
    const confirm_password = user.confirm_password;

    //check if all required information has been inputed
    
    if (!email || !first_name || !last_name || !password || !confirm_password) {
        return res.status(400).json('Please fill all required fields');
              
    };
    if (password !== confirm_password) {
        return res.status(400).json('Passwords do not match');
    };
    
   //first read the json file
    fs.readFile('db.json', (err) => {
        if (err) {
            
        };
        return res.status(200).send(
              
        );
    });
    
    //parse to javascript array
    const reg = JSON.parse(register);
    console.log(reg);
    db.push(reg);

    // stringify

    const userJSON = JSON.stringify(reg);
    //then write to the json file
    fs.writeFile('db.json', userJSON, (err) => {
        return res.status(200).send(
            
            reg,
            
        );
    });

    //output the users information to the console for debugging
    
    console.log(userJSON);
    
    
  
})
//login endpoint
router.post('/login', (req, res) => {
    const login = req.body;
    const uniqueUser = db;
    if (uniqueUser) {
        return res.status(400).json('Email is already registered');
    };
    console.log(login);
    db.push(login);
    res.send('You are logged in')
})

//apply for loan endpoint
router.post('/loan', (req, res) => {
    const loan = req.body;
    if (!email || !first_name || !last_name || !password || !confirm_password) {
        return res.status(400).json('Please fill all required fields');
              
    };


    console.log(loan);

});




module.exports = router;