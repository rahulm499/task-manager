const express = require('express');
const router = express.Router();
const {uid} = require('uid')
const Task = require('../model/Task');

router
.get('/', (req, res)=>{
    Task.find({}, (err, result)=>{
        res.json(result);
    })
    
})
.post('/add', async (req, res)=>{
    if(!req.body.name){
        res.status(404);
        res.json({message: 'Please Enter a task'});
        return;
    }
    const task= new Task({id: uid(), name: name, isDone: false});
    await task.save();
    res.redirect('/tasks');
})
.delete('/:id', (req, res)=>{
        Task.deleteOne({id:req.params.id}, ()=>{
            res.redirect('/tasks');
        });
})
.patch('/:id', (req, res)=>{
        const name = req.body.name;
        const isDone = req.body.isDone;
        
        Task.findOne({id: req.params.id}, async (err, task)=>{
            if(name){
                task.name = name;
            }
            if(isDone){
                task.isDone= isDone;
            }
            await task.save();
            res.redirect('/tasks');
        })
})

module.exports.taskRoutes = router;
