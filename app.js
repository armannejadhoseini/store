const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => {
    res.send('home')
})

app.get('/about/', (req, res) => {
    res.send('about')
})
