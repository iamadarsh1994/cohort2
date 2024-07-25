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
