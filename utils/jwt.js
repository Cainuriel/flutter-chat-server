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
  checkJWT,
};
