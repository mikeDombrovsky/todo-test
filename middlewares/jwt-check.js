const jwt = require("jsonwebtoken");

function jwtCheck(secret) {
  return function (req, res, next) {
    const { token } = req.query;
    
    console.log("jwt-check.js, token = ", token);
    console.log("jwt-check.js, secret = ", secret);
    jwt.verify(token, secret);

    next();
  };
}

module.exports = jwtCheck;
