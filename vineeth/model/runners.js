const mongoose = require('mongoose');

const validator = require('validator');

const bcrypt = require('bcryptjs');

const runnerSchema = new mongoose.Schema( {
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        unique : [true, "Email id already present"],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('INVALID EMAIL');
            }
        }
    },
    phone  :{
        type : Number,
        min : 10, 
        max : 10, 
        unique : true,
        required : true
    },
    address : {
        type : String,
        required : true,
    }
});

runnerSchema.pre('save', async function(next) {
    const passwordHash = await bcrypt.hash(this.password, 10);
    next();
})

const Runnerlist = new mongoose.model( "Runnerlist", runnerSchema);

module.exports = Runnerlist;