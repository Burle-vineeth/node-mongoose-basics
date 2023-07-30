const { log } = require('console');
const express = require('express');

const app = express();
require('./db/conn');

const Student = require('./models/students');

app.use(express.json());

const port = process.env.PORT || 3000;

// app.post('/students', (req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then( () => {
//         res.status(201).send(user);
//     }).catch( (e) => {
//         res.status(400).send(e);
//     })
// })

app.post('/students', async (req,res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch(e) {
        res.status(400).send(e);
    }
})

app.listen( port , () => {
    console.log(`server is listening on ${port}...`);
})