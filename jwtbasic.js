const jwt = require ("jsonwebtoken")
//npm i jwtwebtoken
const value = {
  name: "John Doe",
  accountNumber: "1234567890"
}

const token = jwt.sign(value, "secret", {
  expiresIn: "1h"
})
console.log(token)