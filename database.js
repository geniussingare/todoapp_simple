/*
    Database file contains all CURD opration for simple todo app

*/

const mongoose = require('mongoose');
// mongo db url 

// mongodb+srv://Ganesh:Ganesh@cluster0.amanc.mongodb.net/ 

// todo Craete a env file and all the credentials there...


const todoSchema =  mongoose.schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo =  mongoose.models("todos", todoSchema);

module.exports = {todo: todo};