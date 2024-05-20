const {response} = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createUser = async (req, res=response) => {

    const {email, password} = req.body;

    try {

        const existEmail = await User.findOne({email});
        if(existEmail) {
            return res.status(400).json(
                {
                    ok: false,
                    message: "inappropriate data for registration"
                }
            )
        }   
        const userRequest = User(req.body);
        //encriptacion
        const salt =  bcrypt.genSaltSync();
        userRequest.password = bcrypt.hashSync(password, salt);

        await userRequest.save();
        res.json({
            ok: true,
            message: userRequest
        });
        
    } catch (error) {
        console.log(`error en createUser`, error);
        res.status(500).json({
            ok: false,
            message: "please, contact to the admin"
        })
        
    }

    

}

module.exports = {
    createUser
}

