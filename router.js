const express = require("express")
const { Flight } = require("./models/flight")
const router = express.Router()

router.get("/", async (req, res, next) => {
    res.render("index")
})

//GET all flights
router.get('/flights', async (req, res, next) => {
    const flights = await Flight.find();
    res.json(flights);
});

//POST flight endpoint
router.post('/flights', async (req, res, next) => {
    console.log('/flights post endpoint');

    const todaysDate = Date.today().setTimeToNow();
    const flight = new Flight({ date: todaysDate, destination: "My anus", emptySeats: 69 });
    await flight.save();

    res.send('Flight added succesfully');
});

router.delete('/remove', async (req, res, next) => {
    if (req.query['flights']){
        await Flight.deleteMany({});
        const flights = await Flight.find();
        if (flights.length == 0)
            res.send("All flights have been removed.");
        else
            res.send("Error! Not all flights were deleted.");
    }
    /*else if (req.query['users']){
        await User.deleteMany({});
        const users = await User.find();
        if (users.length == 0)
            res.send("All users have been removed.");
        else
            res.send("Error! Not all users were deleted.");
    }*/
    else
        res.send("Query param not identified.");
});

router.get("/About", (req, res) => {
    res.send("Hatha tisot")
})

module.exports = router