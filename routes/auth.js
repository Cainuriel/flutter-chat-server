// path:  /api/login
const {Router} = require("express");
const { createUser, login, renewJWT } = require("../controllers/auth");
const { check } = require("express-validator");
const { validation } = require("../middlewares/validation");
const { validationJWT } = require("../middlewares/jwt");

const router = Router();

router.post("/new", [
check('name', 'name is mandatory').not().isEmpty(),
check('password', 'password is mandatory').not().isEmpty(),
check('email', 'email format must be correct').isEmail(),
validation
], 
createUser);

router.post("/", [
    check('password', 'password is mandatory').not().isEmpty(),
    check('email', 'email format must be correct').isEmail(),
    ], 
    login);

router.get('/renew', validationJWT, renewJWT);

module.exports = router;
