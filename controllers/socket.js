const message = require("../models/message");
const User = require("../models/user");



const connectionUser = async (uid = '', isConnected = false) => {
    const user = await User.findById(uid);

    user.online = isConnected;

    await user.save();

    return user;

}

const saveMessage = async ( payload ) => {

    try {

        const msg = new message(
            payload
        )

        await msg.save();

        return true
        
    } catch (error) {

        return false
        
    }


}


module.exports = {
    connectionUser,
    saveMessage
}