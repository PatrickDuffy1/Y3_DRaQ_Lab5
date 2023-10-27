const express = require('express')
const app = express()
const port = 3000;

// Use body-parser for POST method
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let bookData = [
  {
  "title": "Learn Git in a Month of Lunches",
  "isbn": "1617292419",
  "pageCount": 0,
  "thumbnailUrl":
  "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
  "status": "MEAP",
  "authors": ["Rick Umali"],
  "categories": []
  },
  {
  "title": "MongoDB in Action, Second Edition",
  "isbn": "1617291609",
  "pageCount": 0,
  "thumbnailUrl":
  "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
  "status": "MEAP",
  "authors": [
  "Kyle Banker",
  "Peter Bakkum",
  "Tim Hawkins",
  "Shaun Verch",
  "Douglas Garrett"
  ],
  "categories": []
  },
  {
  "title": "Getting MEAN with Mongo, Express, Angular, and Node",
  "isbn": "1617292036",
  "pageCount": 0,
  "thumbnailUrl":
  "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
  "status": "MEAP",
  "authors": ["Simon Holmes"],
  "categories": []
  }
  ];

// Route point that sends 'Welcome to Data Representation & Querying' when passed /
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

// Route point that sends the name submitted in the form in index.html using the GET method
app.get('/name', (req, res)=>{
  res.send('Hello ' + req.query.fname + " " + req.query.lname)
})

// Route point that sends the name submitted in the form in index.html using the POST method
app.post('/name', (req, res)=>{
  res.send('Hello POST ' + req.body.fname + " " + req.body.lname)
})

// Route point that sends 'Hello' when passed /hello
app.get('/hello', (req, res)=>{
  res.send('Hello')
})

// Route point that sends 'Hello' and the name which was given when passed /hello/ and a name
app.get('/hello/:name', (req, res)=>{
  res.send('Hello ' + req.params.name)
})

// Route point that sends the bookData json when passed /api/books
app.get('/api/books', (req, res)=>{
  res.json({myBooks:bookData,
    "Message":"Hello from server2.js"
  })
})

// Route point that sends index.html when passed /test
app.get('/test', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})