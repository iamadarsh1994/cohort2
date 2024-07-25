const express = require("express");

const app = express();
//a middleware function act as a checker
// function isUserOldEnough(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isUserOldEnoughMidWare(req, res, next){
const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.json({
      status: "fail",
      message: "you are not old enough"
    });
  }
}

//or just write one line here and it will used by the routes
// app.use(isUserOldEnoughMidWare)
//app.use gets triggered below it for all the routes , it must be above all the routes you want to use it for
app.get("/ride1", isUserOldEnoughMidWare ,function (req, res) {
    res.json({
      message: "Ridden the ride 1",
    });
  
});

app.get("/ride2", isUserOldEnoughMidWare ,function (req, res) {
    res.json({
      message: "Ridden the ride 2",
    });

});


app.listen(3000);
