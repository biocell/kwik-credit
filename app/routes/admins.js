const express = require('express');
const router = express.Router();
const fs = require('fs');


//get all users
router.post('/allUsers', (req, res) => {
    const database = fs.readFileSync('verify.json', function (err, data) {
        res.write(data)
        return res.end();
    });
    const allUsers = JSON.parse(database);
    return res.status(200).send(allUsers);

});

//mark user as verified
router.patch('/<:user-email>/verify', (req, res) => {
    const database = fs.readFileSync('verify.json', function (err, data) {
        res.write(data)
        return res.end();
    });
    
    const allUsers = JSON.parse(database);
    return res.status(200).send(allUsers);
})



//Get a specific loan request


module.exports = router;