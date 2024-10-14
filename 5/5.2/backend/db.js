const mongoose = require ("mongoose")

//Todo{title:string; description:string; completed:boolean}

//mongodb url 

mongoose.connect("mongodb+srv://iamadarsh1994:eflkgxMQjaIagYGA@cluster0.2noln53.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
