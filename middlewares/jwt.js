const jwt = require("jsonwebtoken");

// middleware
const validationJWT = (req, res, next) => {
  // const token = req.header('x-token');
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) return res.status(401).json({ ok: false, msg: "No token" });

  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    req.uid = uid; // necesitamos la uid en el request
    next();
  } catch (error) {
    console.log(`error validationJWT`, error);
    return res.status(401).json({ ok: false, msg: "Invalid token" });
  }
};

// function
const checkJWT = (token = "") => {
  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);
    return [true, uid];
  } catch (error) {
    console.log(`error validationJWT in socket`, error);
    return [false, "invalid token"];
  }
};

module.exports = {
  validationJWT,
  checkJWT,
};
