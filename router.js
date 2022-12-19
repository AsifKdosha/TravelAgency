const express =require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("index", {
        title: "Noder"
    })
})

router.get("/About",(req,res)=>{
    res.send("Hatha tisot")
})

module.exports = router