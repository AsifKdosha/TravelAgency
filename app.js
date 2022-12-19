const path = require("path")
const express =require ("express") //imoport express
const e = require("express")
const app = express() //initialize express app as constant
const router = require("./router")

app.use(express.urlencoded({extended :false}))
app.use(express.json())
app.use(express.static("views"))
app.set("views","views")
app.set("view engine", "html")

app.use("/", router)

app.listen(3000)