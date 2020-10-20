const fs = require('fs');
function getUsers(path, callback) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) throw err;
        callback(data);
    })
}

function updateUsers(newUser) {
    getUsers('/users.json', function (data) {
        let users = JSON.parse(data)
        users.push(newUser)
        fs.writeFile('/users.json', users, function (err) {
            if (err) throw err;
            return
        });
    });
}