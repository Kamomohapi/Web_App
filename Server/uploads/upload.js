const express = require("express");
const multer = require("multer");
const path = require("path");
const connection = require('../config/config');

const router = express.Router();
const app = express();

app.use(express.static('Images'));

const storage = multer.diskStorage({

    destination: (req,file,cb)=>{
        cb(null,'../Images')
    },

    fileName:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now() + path.fileName(file.originalName));
    }
})

const upload = multer({storage:storage})

router.post('/',upload.single('image'),(req,res)=>{
    res.send("Image Uploaded");
    
    const image = req.file.filename;
    const sql = "UPDATE products SET image = ?";

    connection.query(sql,[image],(err,result)=>{

        if(err){
            return res.json({Message:"Error"});
        }
        else{
            return res.json({Status:"Successfully updated"})
        }

    })

})

router.get('/',(req,res)=>{
    const sql = "Select * from products";

    connection.query(sql,(err,result)=>{

        if(err){
            return res.json({Message:"Error retriving data"});
        }
        else{
            return(result);
        }

    })

})   


module.exports = router