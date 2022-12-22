const path = require("path")
const express =require ("express") //imoport express
const e = require("express")
const app = express() //initialize express app as constant
const router = require("./router")

const mongoose =require("mongoose")//init mongoose for better API for mongo

//connect to mongo db
const dbURI='mongodb+srv://admin:19admin28@travelagencydb.6fhjdmd.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((result)=> console.log('conection to db was succeful'))

app.use(express.urlencoded({extended :false}))
app.use(express.json())
app.use(express.static("views"))
app.set("views","views")
app.set("view engine", "html")

app.use("/", router)

app.listen(3000)