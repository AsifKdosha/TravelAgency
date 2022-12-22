const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const flightSchema = new Schema({
    date: {type: Date,required: true},
    time: {type: int, required: true},
    destination:{type: String, required: true},
    departure:{type: String, required: true},
    emptySeats: {type: int, required: true}
},{timestamps: true});