require('./db/connect');

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.get('/', (req, res) => {
 res.send("I am here")
})

//middleware
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks)

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`)
});