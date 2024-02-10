const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controller/createTodo");
const {getTodo,getTodoByid}=require('../controller/getTodo');
const {updateTodo}= require('../controller/updateTodo');
const {deleteTodo}= require('../controller/deleteTodo');

//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodoByid/:id",getTodoByid);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
//catch

module.exports = router;