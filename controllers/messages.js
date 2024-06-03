const Message = require('../models/message');

const getAllMessages = async (req, res) => {

    const userId = req.uid;
    const messageFrom = req.params.from;
    const last30 = await Message.find({
        $or: [{from: userId, to: messageFrom} , {from: messageFrom, to: userId}]
    }).sort({
        createdAt: 'desc'
    }).limit(30);

    res.json({
        ok: true,
        messages: last30
    })

}

module.exports = {
    getAllMessages
}