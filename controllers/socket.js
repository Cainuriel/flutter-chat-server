const User = require("../models/user");



const connectionUser = async (uid = '', isConnected = false) => {
    const user = await User.findById(uid);

    user.online = isConnected;

    await user.save();

    return user;

}


module.exports = {
    connectionUser
}