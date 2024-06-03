// api/messages

const {Router} = require("express");
const { validationJWT } = require("../middlewares/jwt");
const { getAllMessages } = require("../controllers/messages");
const router = Router();

router.get('/:from', validationJWT, getAllMessages);

module.exports = router;