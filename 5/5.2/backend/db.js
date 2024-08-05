const mongoose = require ("mongoose")

//Todo{title:string; description:string; completed:boolean}

//mongodb url 

<<<<<<< HEAD
mongoose.connect("mongodb+srv://mongodb.net/")
=======
mongoose.connect("-----...")
>>>>>>> c101d7118117ba8c2d0fb56ea56866ffe48d6c5b
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
