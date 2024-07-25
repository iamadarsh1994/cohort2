// const express = require("express");

// const mongoose = require('mongoose');
// const app = express()
// app.use(express.json())

// mongoose.connect("mongodb+srv://iamadarsh1994:tSSdKLIbXUo0aayB@cluster0.2noln53.mongodb.net/");

// const User = mongoose.model('Users', {name: String, email: String, password: String})

// app.post("/signup", async function(req, res){
//   const username = req.body.name;
//   const password = req.body.password;
//   const name = req.body.name;
//   const exisitingUser = await User.findOne({name: username});
//   if(exisitingUser){ return res.status(400).send("Username already exixts") }
//   const user = new User({name: name, password: password, email: username})
//   user.save()
//   res.json({
//     "msg":"User created"
//   })
// })
// app.listen(3000, function(){console.log("server is listening on 3000")})

const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://iamadarsh1994:tSSdKLIbXUo0aayB@cluster0.2noln53.mongodb.net/");

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post("/signup", async function(req, res) {
  const username = req.body.email;  // corrected from req.body.name
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });  // corrected to check email
  if(existingUser) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({name: name, password: password, email: username});

  try {
    await user.save();  // ensure the save operation completes
    res.json({
      "msg": "User created"
    });
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});
app.listen(3000)