const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();

const port = process.env.PORT || 4000;
// need middlewrae to parse json request body

app.use(express.json());

//import routes for todo api
const todoRoutes =require("./routes/todos");

//mount the todo API routes
app.use("/api/v1", todoRoutes);

//satrt server
app.listen( port ,()=>{
    console.log( `server started successfully at ${port}`)
});

//DB connection
const dbconnect = require("./config/database");
dbconnect();

//default Route
app.get('/', (req, res)=>{
 res.send(`<h1>successfully exicuted default route ,home page</h1>`)
})




