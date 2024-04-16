const express = require("express");

const connection =  require('./config/config');

const app = express(); 

const userRoute = require("./Routes/users")
const productsRoute = require("./Routes/products")
const uploads = require("./uploads/upload")

app.use('/user',userRoute);
app.use('/products',productsRoute);
app.use('/uploads',uploads)


const port = 8006;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
