const express = require("express");

const app = express();
//a middleware function act as a checker
function isUserOldEnough(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

app.get("/ride1", function (req, res) {
  if (isUserOldEnough(req.query.age)) {
    res.json({
      message: "Ridden the ride 1",
    });
  } else {
    res.status(411).json({
      msg: "User not old enough",
    });
  }
});
//as middleware is a func so we can use as many times we want
app.get("/ride2", function (req, res) {
    if (isUserOldEnough(req.query.age)) {
      res.json({
        message: "Ridden the ride 2",
      });
    } else {
      res.status(411).json({
        msg: "User not old enough",
      });
    }
  });

app.listen(3000);
