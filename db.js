//very imp file 
// database connection(nodejs with mongodb)
const mongoose= require("mongoose");
// define the mongodb connection with url
// 1. IMPORT MONGOOSE AND DEFINE MONGODB CONNECTION
const mongoURL = 'mongodb://localhost:27017/hotels'// hotels is name of the database
//2. SETUP THE MONGODB CONNECTION
mongoose.connect(mongoURL,{
    //usenewUrlParser: true
    //useUnifiedTopology: true
})
//3. get the default connection
//mongoose maintains a default connection object representing the mongodb connection
//this object will use to handle the events and interact with databse
const db = mongoose.connection;
//4.event listeners like (connected,disconnectedd ,error)
db.on("connected",()=>{
    console.log('connected to MongoDb server');
})
db.on("disconnected",()=>{
    console.log('disconnected to MongoDb server',);
})
db.on("error",(err)=>{
    console.log('error in MongoDb server',err);
})
//export databse connection
module.export=db;