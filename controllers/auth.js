const {response} = require("express");
const User = require("../models/user");


const createUser = async (req, res=response) => {

    const userRequest = User(req.body);
    await userRequest.save();

    res.json({
        ok: true,
        msg: "Create user correctly"
    });

}

module.exports = {
    createUser
}

