const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = [];
const users = require('./app/routes/users');

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(users);

app.listen(port, (req, res) => {
    console.log(`we are live on port ${port}`);
});
