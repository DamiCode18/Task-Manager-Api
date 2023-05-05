require("./db/connect");
require('dotenv').config();

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const URI = process.env.MONGO_URI;
const port = process.env.SERVER_PORT;


//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);


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
