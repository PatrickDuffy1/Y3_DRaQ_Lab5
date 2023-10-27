const express = require('express')
const app = express()
const port = 4000;

// Route point that sends 'Hello World!' when passed /
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Route point that sends 'Good Bye!' when passed /whatever
app.get('/whatever', (req, res)=>{
    res.send('Good Bye!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})