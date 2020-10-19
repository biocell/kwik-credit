const express = require('express');
const router = express.Router;
const fs = require('fs')

//get all registered users
router.get('/users', (req, res) => {
    return res.json();
});

//get a specific user
router.get('/user/id', (req, res) => {
    
});
//get a specific loan
router.get('/loans/id', (req, res) => {
    
});

router.get('/loans/repaid', (req, res) => {
    
});
router.get('/loans/unrepaid', (req, res) => {
    
});
router.get('/loans', (req, res) => {
    
});
router.get('/loans/id/history', (req, res) => {
    
});

//create a loan application
router.post('/loans', (req, res) => {
    
});
router.post('/loans/id/repaid', (req, res) => {
    
});

router.patch('/loans/id', (req, res) => {
    
});


