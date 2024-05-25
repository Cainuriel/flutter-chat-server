const { response } = require("express")
const User = require("../models/user");


const getUsers = async (req, res = response) => {

    const from = Number(req.query.from) || 0;

    const users = await User
    .find({ _id: {$ne: req.uid}}) // elimina la info del usuario que realiza el request
    .sort('-online')
    .skip(from)
    .limit(5);

    res.json({
        ok: true,
        msg: users
    })

}


module.exports = {
    getUsers
}