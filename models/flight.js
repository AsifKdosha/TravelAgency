const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const flightSchema = new mongoose.Schema({
    date: { type: Date, required: true }, //Departure date
    //time: {type: int, required: true}, //date includes time, can be deleted.
    destination: { type: String, required: true }, //Flight destination
    //departure: { type: String, required: true }, //??
    emptySeats: { type: Number, required: true, validate: { validator: Number.isInteger, message: '{VALUE} is not an integer value'} } //Number of empy seats, with integer validation
}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);

module.exports = {
    Flight
}