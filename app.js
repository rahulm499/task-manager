const express = require('express');
const mongoose = require('mongoose');
const {uid} = require('uid')
const Task = require('./model/Task');
require('dotenv').config()

//Routes
const {taskRoutes} = require('./controller/tasks')

mongoose.connect(process.env.MONGO_URI, ()=>{
    console.log("Database Connected")
});

// const run = async (name) => {
//     const task= new Task({id: uid(), name: name, isDone: false});
//     await task.save();
// }
const app = express();

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/',(req, res)=>{
    res.status(404);
    res.json({message: 'Invalid'})
})

app.listen(process.env.PORT);
