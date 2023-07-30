// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/students-api', {
//     useCreateIndex : true,
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }).then( () => {
//     console.log('connection success');
// }).catch( (err) => {
//     console.log('no connection');
// })

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/mt_database');

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('connected', function() {
    console.log('MOngoose default connection done');
});

db.on('error', function(err) {
    console.log(err);
})