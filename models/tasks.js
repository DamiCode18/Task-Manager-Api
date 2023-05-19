const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
    maxLength: [20, "name cannot be more than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "description must be provided"],
  },
  status: {
    type: String,
    default: "Todo",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Task", TaskSchema);
