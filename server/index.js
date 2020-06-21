const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pino = require("express-pino-logger")();
const fs = require('fs');
const app = express();
const router = express.Router();
const cors = require('cors');

var data = fs.readFileSync('../src/data.json');
var words = JSON.parse(data);
const {
  handleRegister
} = require("./apiHandler")

const jsonParser = bodyParser.json();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/", (req,res) =>{ console.log(words);res.sendFile(path.resolve("../public/index.html"))});

app.get('/data', (req, res) => {
  res.sendFile(path.resolve('../src/data.json'));
});

app.post('/register', jsonParser, handleRegister);


app.listen(8000, () =>
  console.log("Express server is running on localhost:8000")
);
