const express = require('express');
const path = require('path');
require( 'dotenv/config');
const DbOperations = require('./dbOperations');
var bodyParser = require('body-parser')
var cors = require('cors')


const app = express();
app.use(bodyParser.json())
app.use(cors());


app.get('/books', (req, res) => {

  return res.send(DbOperations.getAllBooks());
});

app.get('/book/:id', (req, res) => {
  const book = DbOperations.getBook(req.params.id);
  if (book) {
    return res.send(book);
  }
  return res.status(404).send();
});

app.get('/authors/', (req, res) => {
  return res.send(DbOperations.getAllAuthors());
});

app.get('/author/:id', (req, res) => {
  const author = DbOperations.getAuthor(req.params.id);
  if (author) {
    return res.send(author);
  }
  return res.status(400).send();
});

app.post('/author', (req, res) => {
  let success = DbOperations.addAuthor(req.body);
 let code = success ? 200 : 400;
  return res.sendStatus(code);
});

app.post('/book', (req, res) => {
  let success = DbOperations.addBook(req.body);
  let code = success ? 200 : 400;
  return res.sendStatus(code);

});







app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
