const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();

const port = process.env.PORT || 4000;

// need middlewrae to parse json request body

app.use(express.json());

//import routes for todo api
const todoRoutes =require("./routes/todo");
//mount the todo API routes
app.use("api/v1",todoRoutes);

//satrt server
app.listen( port ,()=>{
    console.log( `server started successfully at ${port}`)
});

//DB connection
// const dbconnect = require("./config/database");
// dbconnect();
const mongoose= require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error" + error)} );







app.get('/', (req, res)=>{
 res.send("successfully exicuted default route ,home page")
})