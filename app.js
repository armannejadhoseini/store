require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');
const itemRouter = require('./routers/itemRouter');
const commentRouter = require('./routers/commentRouter');


//express app
const app = express();

//connect to db
mongoose.connect(process.env.dbURI)
    .then((result) => {
        console.log('connected to database successfully');

        //start server
        app.listen(process.env.apiPORT, () => {
            console.log('listening on port ' + process.env.apiPORT);
        });
    })
    .catch((err) => {
        console.log(err.message);
    });

//middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/about/', (req, res) => {
    res.send('about');
});

//routers
app.use('/users', authRouter);
app.use('/items', itemRouter);
app.use('/comments', commentRouter);