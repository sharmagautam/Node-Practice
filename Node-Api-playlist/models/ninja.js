const mongoose= require('mongoose');
const Schema = mongoose.Schema;

// create geo location schema
const GeoSchema = new Schema({
    type : {
        type : String,
        default : "Point"
    },
    coordinates : {
        type : [Number],
        index : "2dsphere"
    }
});

// creare ninja schema and model

const ninjaSchema = new Schema({
    name : {
        type : String,
        required : [true, 'Name feild required.']
    },
    rank : {
        type : String
    },
    availability : {
        type : Boolean,
        default : false
    },
    geometry : GeoSchema
});

const Ninja = mongoose.model('ninja', ninjaSchema);  // Ninja is the model name, first param is the name of collection(table) and the 2nd is how the data get store in this collection
module.exports = Ninja;