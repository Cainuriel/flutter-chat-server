const jwt = require('jsonwebtoken');


const generationJWT = ( uid ) => {

    return new Promise((resolve, reject) => {

        const payload = { uid };
            jwt.sign(payload, process.env.JWT_KEY, {
                expiresIn: '12h'
            }, (err, token) =>{
                if(err) {
                    // no se puedo crear el token
                    reject("JWT no possible creation")
                } else {
                    resolve(token);
                }
            });

    });

   

}

module.exports = {
    generationJWT
}