const express = require('express');
const router = express.Router();
const shortId = require('shortid')
var {data} = require('./data')
shortId.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

router.get('/', (req, res)=>{
    res.json(data);
})

router.post('/add', (req, res)=>{
    if(!req.body.name){
        res.status(404);
        res.json({message: 'Please Enter a task'});
        return;
    }
    data.push({id: shortId(), name: req.body.name, isDone: false});
    res.redirect('/');
})

router.delete('/:id', (req, res)=>{
        data = data.filter((i)=>{
            if(i.id !== req.params.id){
                return i;
            }
        })
        res.redirect('/');
})

router.patch('/:id', (req, res)=>{
        data.forEach((element)=>{
            if(element.id === req.params.id){
                if(req.body.name)
                element.name = req.body.name;
                if(req.body.isDone)
                element.isDone = req.body.isDone;
            }
        })
        res.redirect('/');
})

module.exports.taskRoutes = router;
