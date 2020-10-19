const db = {
    users: []
};

db.users.push({ id: 1 });
var data = JSON.stringify(db);

var fs = require('fs');
fs.writeFile('ink.json', data, 'utf8', callback);

fs.readFile('ink.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    } else {
        db = JSON.parse(data);
        db.users.push({ id: 00 });
        json = JSON.stringify(obj);
        fs.writeFile('ink.json', data, 'utf8', callback);
    }
})