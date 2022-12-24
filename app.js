const path = require("path")
const express = require("express") //imoport express
const app = express() //initialize express app as constant
const router = require("./router")
const cors = require('cors')
require('datejs') //Add Datejs library, no need for assignment as it's just a wrapper to vanilla JS's date
app.use(cors())
//DB exports
const { Flight } = require('./models/flight')

const mongoose = require("mongoose")//init mongoose for better API for mongo

//connect to mongo db
//const dbURI = 'mongodb+srv://admin:19admin28@travelagencydb.6fhjdmd.mongodb.net/?retryWrites=true&w=majority'
const dbURI = 'mongodb+srv://admin:LxKYpzQmKtWqDnDp@cluster0.llpa1sz.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI).then(app.listen(3000)).catch((err) => console.log(err))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//Might be better to use, not sure.
//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static("views"))
app.set("views", "views")
app.set("view engine", "html")

app.use("/", router)