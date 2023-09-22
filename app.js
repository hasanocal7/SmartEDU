// Modules
const express = require('express');
require('dotenv').config();
const ejs = require('ejs')
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute')

// Express Function
const app = express();

//Connect MongoDB
mongoose.connect('mongodb://localhost:27017/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB Connected!')
}).catch((err) => {
    console.log(err)
})



// Template Engine (ejs)
app.set('view engine', 'ejs')

// Router
app.use('/', pageRoute)

//Middleware
app.use(express.static("public"))

// Application Connect with Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Started on Port: ${port} ...`);
});
