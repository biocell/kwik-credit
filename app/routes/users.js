const express = require('express');
const router = express.Router();
const http = require('http');
const fs = require('fs');
const db = [];

const isValidUser = require('../userValidation');
const isVerifiedUser = require('../userVerification');

router.post('/register', (req, res) => {
    const user = req.body;
    const email = user.email;
    function getUsers(filePath, callback) {
        fs.readFile(filePath, 'utf8', function (err, currentUser) {
            if (err) {
                return res.status(500).json('File Read Error')
            } else {
                return callback(currentUser);
            }
        });
    };

    function updateUsers() {
        return getUsers('db.json', function (currentUser) {
            let currentUsersList = JSON.parse(currentUser)
            currentUsersList.push(user)
            
           //get list of users and verify if email exists
            const database = fs.readFileSync('db.json', function (err, data) {
                if (err) {
                    return res.status(500).json("Errrooooorr");
                }
                res.write(data)
                return res.end();
            });
            const userList = JSON.parse(database);
            const input = user.email;
        
            function isUnique(user) {
                return user.email === input;
                    }
                
            const uniqueUser = userList.find(isUnique);
            if (uniqueUser) {
                return res.status(400).send(`${email} already registered to an account`);
                 res.end();
            };

                fs.writeFile('db.json', JSON.stringify(currentUsersList), function (err) {
                    if (err) {
                        return res.status(500).json('File Write error');
                    } else {
                        return res.status(200).json('User Registered Successfully');
                    
                    }
                });
           
            });
        
        
    };   //Check if the email is not in the database
    const data = fs.readFileSync('db.json', function (err, datas) {
        res.write(datas)
    });
    let check = data.find(uniqueUser =>
        uniqueUser.email === user.email)
    if (check) {
        return res.status(400).json('email already registered to an account');
        
    }


    if (isValidUser(user)) {
        updateUsers();
    } else {
        return res.status(400).json('Please complete all required fields');
    }
           
})
//login endpoint
router.post('/login', (req, res) => {
    const user = req.body;
    const database = fs.readFileSync('db.json', function (err, data) {
        res.write(data)
        return res.end();
    });
    const userList = JSON.parse(database);
    const input = user.email;
    const password = user.password;

    function isUnique(user) {
      
        return user.email === input && user.password === password;
            }
        
    const uniqueUser = userList.find(isUnique);
    if (uniqueUser) {
        return res.status(200).send("You exist");
         res.end();
    }
    if (!input || !password) {
        return res.status(400).send("Please fill all required fields");
        res.end();
    }
    else {
        return res.status(400).send("You dont exist");
        res.end();
    };
    
});
    
    //verify user
router.post('/verify', (req, res) => {
    const user = req.body;
    const email = user.email;
    function verifyUsers(filePath, callback) {
        fs.readFile(filePath, 'utf8', function (err, currentUsers) {
            if (err) {
                return res.status(500).json('File Read Error')
            } else {
                return callback(currentUsers);
            }
        });
    };

    function updateUsers() {
        return verifyUsers('verify.json', function (currentUsers) {
            let currentUsersList = JSON.parse(currentUsers)
            currentUsersList.push(user);
        
            //get list of verification requests
            const database = fs.readFileSync('verify.json', function (err, data) {
                if (err) {
                    return res.status(500).json("Errrooooorr");
                }
                res.write(data)
                return res.end();
            });
            const userList = JSON.parse(database);
            const input = user.email;

            function isUnique(user) {
                return user.email === input;
            }
        
            const uniqueUser = userList.find(isUnique);
            if (uniqueUser) {
                return res.status(400).send(`${email} has already requested to be verified`);
                res.end();
            };



            fs.writeFile('verify.json', JSON.stringify(currentUsersList), function (err) {
                if (err) {
                    return res.status(500).json('File Write error');
                } else {
                    return res.status(200).json('Your request has been received!');
        
                }
            });
            
        });
    };

 
    
    if (isVerifiedUser(user)) {
        updateUsers();
    } else {
        return res.status(400).json('Please complete all required fields');
    }
})
    
//Application for a loan
router.post('/loans', (req, res) => {
    const loan = req.body;
    function getLoans(filePath, callback) {
        fs.readFile(filePath, 'utf8', function (err, currentLoan) {
            if (err) {
                return res.status(500).json("File read error");
            } else {
                return callback(currentLoan);
            }
        });
    };

    function updateLoan() {
        return getLoans('loans.json', function (currentLoan) {
            let currentLoanList = JSON.parse(currentLoan);
            currentLoanList.push(loan);

            //check if there is no duplicate application
            const database = fs.readFileSync('loans.json', function (err, data) {
                if (err) {
                    return res.status(500).json('Errooooorrr');
                }
                res.write(data)
                return res.end();
            });
            
            const loanList = JSON.parse(database);
            const input = loan.email;

            function isUnique(loan) {
                return loan.email === input;
            }
            const uniqueLoan = loanList.find(isUnique);
            if (uniqueLoan) {
                return res.status(400).send("You already have a pending application");
                 res.end();
            }



            fs.writeFile('loans.json', JSON.stringify(currentLoanList), function (err) {
                if (err) {
                    return res.status(500).json('File Write error');
                } else {
                    return res.status(200).json('Application Successful');
                
                }
            });
        });
    };
    

    updateLoan();
});

//view loan repayment history
router.get('/loans/repayments', (req, res) => {
    const history = fs.readFileSync('loans.json', function (err, data) {
        res.write(data);
        return res.end();
        
    });
    const list = JSON.parse(history);

})



module.exports = router;