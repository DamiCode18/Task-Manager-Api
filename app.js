require("./config/database");
require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors")

const tasks = require("./routes/tasks");
const auth = require("./routes/auth");
const users = require("./routes/users");

const connectDB = require("./config/database");
const { notFound } = require("./middlewares/error-handler");
const { errorHandlerMiddleware } = require("./middlewares/error-handler");


const URI = process.env.MONGO_URI;
const port = process.env.SERVER_PORT || 5000;


//cors
app.use(cors())
//middleware

app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use("/api/v1", auth);
app.use("/api/v1/users", users);

//error handler
app.use(errorHandlerMiddleware); 
app.use(notFound)


const start = async () => {
  try {
    await connectDB(URI)
      .then(() => console.log("Database connected..."))
      .catch((err) => console.log(err));
    app.listen(port, (req, res) => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(`error: ${error}`);
  }
};
start();
