const express = require('express');

const app = express();

const path = require('path');

const hbs = require('hbs');

const cors = require('cors');

const fs = require('fs');

const router = require('./routes/products');

app.use(cors());

app.use(express.json());

app.use('/products', router);

const products = require('./products');
const { result } = require('lodash');
const { route } = require('./routes/products');

const partialPath = path.join(__dirname, './partials');

app.set('view engine', 'hbs');

hbs.registerPartials(partialPath);

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})

app.get('*', (req,res) => {
    res.write('<h1> 404 Error<br>This Page is not Found </h1>');
    res.write('<h3>Navigate Home</h3>&nbsp;&nbsp;<a href="/">home</a>');
    res.send();
})

// fs.readFile(
//     './normaldata.js',
//     'utf-8',
//     (err,res) => {
//         if(err) {
//             return console.log('err');
//         }
//         let firstData = res;
//         console.log(typeof res);
//         fs.writeFile(
//             './fundData.js',
//             firstData,
//             {flag : 'a'},
//             (err,res) => {
//                 if(err) {
//                     return console.log('err2');
//                 }
//                 console.log('data writen');
//             }
//         )
//     }
// )

app.listen(5000, () => {
    console.log('server is listening');
});