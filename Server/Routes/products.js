const express = require("express")
const router = express.Router()
const connection = require("../config/config")

router.post('/',(req,res)=>{
    var sql = "INSERT INTO products(name,description,price,image,category) VALUES(?,?,?,?,?);"
    var sql_body = [req.body.name,req.body.description,req.body.price,req.body.image,req.body.category]

    connection.query(sql,sql_body,(err,result)=>{

        if(err){
            console.log(err);
        }
        else{
            if(result.affectedRows != 0){
             console.log("Data successfully inserted");
             console.log(result);
             res.send({message:"Data successfully inserted"});
            }else{
             console.log("Data not inserted");
             console.log(result);
             res.send({message:"Data not inserted"});
            }
        }

    })
 })
 router.get('/',(req,res)=>{
     var sql = "SELECT * FROM products;"  
     connection.query(sql,(err,result)=>{
        
        if(err){
            console.log(err);  
        }
        else{
            if(result.length > 0){
                console.log("Data fetched succesfully");
            }
        }
     })
 })

router.delete('/',(req,res)=>{
    var sql = "DELETE FROM products WHERE name = ?;"
    var sql_body = req.body.name;

    connection.query(sql,sql_body,(err,result)=>{
        if(err){
            console.log("Error deleting data");
            res.send({message:"Error deleting data"});
        }
        else{
            console.log("Data successfully deleted");
            res.send({message:"Data successfully deleted"});
        }
    })
})

router.put('/',(req,res)=>{
    var sql = "UPDATE products SET price = ? WHERE name = ?;"
    var sql_body = [req.body.price,req.body.name]

    connection.query(sql,sql_body,(err,result)=>{
        if(err){
            console.log("Error updating row");
            res.send({message:"Error "})
        }else{
            console.log("Data successfully updated");
            res.send({message:"Data successfully updated"});  
        }
    })
})

module.exports = router;