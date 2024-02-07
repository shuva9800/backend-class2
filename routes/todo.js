const express= require('express');
const router= express.Router();

//import controller
 const {CreateTodo}=require("../controller/CreateTodo");

 //define Api route
 router.post("/CreateTodo", CreateTodo);
 
 module.exports = router;