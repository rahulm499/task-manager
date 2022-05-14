const express = require('express');
const {taskRoutes} = require('./tasks')

const app = express();

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/tasks', taskRoutes);


const PORT = 5000;
app.listen(PORT);
