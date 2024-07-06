const jwt = require('jsonwebtoken');

function jwtCheck(secret) {
    return function (req, res, next) {
      const { token } = req.query;
      console.log('jwt-check.js, token = ', token);
      jwt.verify(token, secret);

      next();
    }
}

module.exports = jwtCheck;
