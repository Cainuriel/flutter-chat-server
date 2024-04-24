//  /api/login

const {Router, response} = require("express");

const router = Router();

router.post("/new", (reg, res = response) => {

    res.json({
        ok: true,
        msg: "Create user"
    })
  
});

module.exports = router;
