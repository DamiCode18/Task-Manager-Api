const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.headers.authorization || req.query.token || req.headers["x-access-token"];
  const tkn = token?.split(" ")[1]
  if (!tkn) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(tkn, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
