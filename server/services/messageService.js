const Message = require("../models/message.js");

const saveMessage = async (data) => {
  try {
    const message = new Message({
      room: data.room,
      sender: data.author,
      message: data.message,
    });
    await message.save();
  } catch (error) {
    console.error("Error saving message:", error);
  }
};

module.exports = { saveMessage };
