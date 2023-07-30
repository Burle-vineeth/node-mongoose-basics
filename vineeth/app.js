// const express = require('express');

// const app = express();

// const bcrypt = require('bcryptjs');

// const jwt = require('jsonwebtoken');

// // require('./db/conn');

// // const Runner = require('./model/runners');

// app.use(express.json());

// const port = process.env.PORT || 3000;

// // const securePassword = async (val) => {
// //     const res = await bcrypt.hash(val, 10);

// //     console.log(res, 'encrypted value');

// //     const re1 = await bcrypt.compare(val, res);

// //     console.log(re1, 'final');
// // }

// // securePassword('vineeth');

// // const createToken = async () => {
// //     try {
// //         const token = await jwt.sign( {_id : "295798237545"} , "mynameisvinodbahadurthapa");
// //         console.log(token);
// //         return token;
// //     } catch(err) {
// //         console.log(err);
// //     }
// // }


// app.listen( port , () => {
//     console.log(`server is listening on port ${port}`);
// })

var assert = require('assert');

function add(a, b) {
	return a + b;
}

var expected = add(1,2);

assert( expected !== 4, 'one Plus two is three');