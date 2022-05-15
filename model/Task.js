const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: String,
    name: String,
    isDone: Boolean
})

module.exports = mongoose.model('Task', taskSchema);