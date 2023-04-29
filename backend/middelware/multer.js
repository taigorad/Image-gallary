const multer=require("multer")
const {v4: uuidv4}=require ("uuid")
const path=require("path")

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"./public/upload/")
    },
    filename: function(req,file,cb){
        cb(null,`${uuidv4()}_${path.extname(file.originalname)}`)
    }
})


const  fileFilter=(req,file,cb)=>{
 const allowedFileType=["image/jpeg","image/jpg","image/png"]
 if(allowedFileType.includes(file.mimetype)){
    cb(null,true)
 }
 else{
    cb(null,false)
 }
}


const uplodmiddleware=multer({storage,fileFilter})


module.exports=uplodmiddleware