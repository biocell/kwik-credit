const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
let student = JSON.parse(rawdata);
console.log(student);