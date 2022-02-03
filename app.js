const express = require('express');
const authRouter = require('./routers/authRouter');

//express app
const app = express();

//middleware
app.use(express.json());

//listen for requests
const server = app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port ' + server.address().port)
});

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/about/', (req, res) => {
    res.send('about');
});

app.use(authRouter);
