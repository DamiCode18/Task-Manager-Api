const { asyncWrapper } = require("../middlewares/async");
const User = require("../models/user");

//get all tasks endpoint
const getAllUsers = asyncWrapper(async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json({ success: true, data: allUsers });
});

module.exports = {
  getAllUsers,
};
