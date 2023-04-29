const mongoose =require("mongoose")
const url="mongodb+srv://taigorad:goradwadi10@cluster0.ba6s9tj.mongodb.net/Photo_Gallery?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>{
console.log("mongo connectes successfully")
}).catch(()=>{
    console.log("connection not successfully")
})


const schem=new mongoose.Schema({
  photo:{
    type:String,
    required:true
  }  ,

},
{timestamps:true}
)
const mode=new mongoose.model("image",schem)

module.exports =mode