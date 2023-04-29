const express=require("express")
const app=express()
const cors=require("cors")

const route=require("./Routes/uploadroutes")
const port=process.env.port||6000
app.use(express.json())
app.use(cors())
app.use(express.static("public"))
app.use(route)




app.listen(port,()=>{
    console.log("server is start")
})