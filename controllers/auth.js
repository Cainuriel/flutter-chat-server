const {response} = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generationJWT } = require("../jwt/jwt");

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

        // generar JWT
        const JWT = await generationJWT(userRequest.id);

        res.json({
            ok: true,
            message: userRequest,
            JWT
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

