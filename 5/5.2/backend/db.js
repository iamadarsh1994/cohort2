const mongoose = require ("mongoose")

//Todo{title:string; description:string; completed:boolean}

//mongodb url 

mongoose.connect("-----...")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
