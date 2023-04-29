const {Router}=require("express")
const uplodmiddleware = require("../middelware/multer")
const mode=require("../mongodb connection/mongoose")
const route=Router()

route.post("/api/save",uplodmiddleware.single("photo"),(req,res)=>{
    const photo=req.file.filename
 mode.create({photo}).then(()=>{
    console.log("upload succ")
    res.send(photo)
 })
 .catch((err)=>{
    console.log(err)
 })
    
    
})
route.get("/api/get",async(req,res)=>{
    const all=await mode.find().sort({createdAt:"descending"})
    res.send(all)
})
module.exports=route