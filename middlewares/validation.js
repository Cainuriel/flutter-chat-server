const { validationResult } = require("express-validator");

const validation = (req, res, next) => {

    const err = validationResult(req);
    console.log(`err`, err);
    if(err.isEmpty) {
        return res.status(400).json(
            {ok: false,
            errors: err.mapped()}
        )
    }

    next();
     
}


module.exports = {
    validation
}