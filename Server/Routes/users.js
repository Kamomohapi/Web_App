const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require("../config/config")


const app = express();
const router = express.Router();

app.use(express.json());

app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["POST", "GET"],
      credentials: true,
    })
  );
  app.use(cookie());
  app.use(bodyParser.json());
  
  const salt = 10;
  

router.post("/Signup", (req, res) => {
    const sql = `INSERT INTO customer(name,email,password) VALUES(?,?,?);`;
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
      if (err) return res.json({ Error: "Error hashing password" });
  
      const data = [req.body.name, req.body.email, hash];
      db.query(sql, data, (err, result) => {
        if (err) console.log(err);
        else {
          if (result.affectedRows != 0) {
            console.log("Successfully inserted");
            console.log(result);
            res.send({ message: "Successfully inserted" });
          } else {
            console.log("Data not successfully inserted");
            console.log(result);
            res.send({ message: "Data not successfully inserted" });
          }
        }
      });
    });
  });


  const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
      return res.json({Error:"You are not logged in "});
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decode) =>{
        if(err){
          return res.json({Error:"token is not okay"});
        }
        else{
          req.name = decoded.name;
          next();
        }
      })
    }
  }


  router.get('/',verifyUser,(req,res) =>{
    return res.json({Status:"Success",name:req.name});
  })

router.post("/Login", (req, res) => {
    const sql = "SELECT * FROM customer WHERE email = ?";
    db.query(sql, [req.body.email], (err, result) => {
      if (err) return res.json({ Error: "Login error" });
      if (result.length > 0) {
        bcrypt.compare(req.body.password.toString(), result[0].password, (err, response) => {
          if (err) return res.json({ Error: "Password compare error" });
          if (response) {
            
            const name = result[0].name;
            const token = jwt.sign({name},"jwt-secret-key",{expiresIn:"1d"});
            res.cookie('token',token);
  
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Error: "Password not matched" });
          }
        });
      } else {
        return res.json({ Error: "Email does not exist" });
      }
    });
  });

module.exports = router;