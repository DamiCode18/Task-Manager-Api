const mongoose = require("mongoose")

const connectionString =
  'mongodb+srv://damicode:jCqRzhl8aW48ZCPM@task-manager.ge1agkz.mongodb.net/Task-Manager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`e no dey work ${err}`))
