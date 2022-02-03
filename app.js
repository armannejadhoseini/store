require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');


//express app
const app = express();

//middleware
app.use(express.json());

//connect to db
mongoose.connect(process.env.dbURI)
    .then(() => {
        console.log('connected to database successfully');

        //start server
        app.listen(process.env.PORT, () => {
            console.log('listening on port ' + process.env.apiPORT);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });


app.get('/', (req, res) => {
    res.send('home');
});

app.get('/about/', (req, res) => {
    res.send('about');
});

app.use(authRouter);
