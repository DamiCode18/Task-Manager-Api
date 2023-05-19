const { asyncWrapper } = require("../../middlewares/async");
const User = require("../../models/user");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const omit = require("lodash");
// ...

const login = asyncWrapper(async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "10m",
        }
      );

      // save user token
      user.token = token;

      const userDataWithoutPassword = omit(user, 'password');
      res
        .status(200)
        .json({
          success: true,
          msg: "Logged in successfully",
          data: user,
        });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// ...
module.exports = {
  login,
};
