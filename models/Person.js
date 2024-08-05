const mongoose= require('mongoose');
//schema in database
const personSchema = new mongoose.Schema
({
    name :{
        type: String,
        required: true//mandatory to fill

    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type: String,
        reuired:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required:true
    }
});
// create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;

