const express = require('express')
const app = express();
//const port = 3000;


const db = require('./db');
require('dotenv').config();

const bodyparser=require("body-parser");
app.use(bodyparser.json());
const PORT =process.env.PORT ||3000;
//const menuitem = require('./models/menuitem'); 

app.get('/', (req, res) => {
  res.send('Hello World! welcome to our hotel')

})

app.get('/op',(req,res) =>{
  res.send("sure sir , this is a op work")
})

//import the router files
const personroutes =require('./routes/personroute');
app.use('/person',personroutes);

const menuroutes =require('./routes/menuroutes');
app.use('/menuitem',menuroutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//app.listen(3000)




