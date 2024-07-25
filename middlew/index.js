const express = require("express");

const app = express();

app.get("/health-checkup"),
  function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.headers.kidneyId;

    if (!(username === "adarsh" && password === "pass")) {
      if (kidneyId === 1 || kidneyId === 2) {
        res.json({ message: "Health Checkup Successful" });
        if (kidneyId == 1 || kidneyId == 2) {
          res.json({ message: "Health Checkup Successful" });
        }
      }
    }
  };

  app.listen(3000)