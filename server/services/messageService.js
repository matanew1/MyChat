const Message = require("../models/message.js");

const saveMessage = async (data) => {
  try {
    const message = new Message({
      room: data.room,
      sender: data.sender,
      message: data.message,
      time: data.time,
    });
    await message.save();
  } catch (error) {
    console.error("Error saving message:", error);
  }
};

const getHistoryMsgByRoom = async (room) => {
  try {
    return await Message.find({ room });
  } catch (error) {
    console.error("Error saving message:", error);
  }
};

module.exports = { saveMessage, getHistoryMsgByRoom };
