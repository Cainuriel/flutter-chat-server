// path:  /api/users
const {Router} = require("express");
const { validationJWT } = require("../middlewares/jwt");
const { getUsers } = require("../controllers/users");

const router = Router();

router.get('/', validationJWT, getUsers);

module.exports = router;
