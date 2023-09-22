// Modules
const express = require('express');
require('dotenv').config();
const ejs = require('ejs')
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute');

const bodyParser = require('body-parser')



// Express Function
const app = express();

//Connect DB
mongoose
  .connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  });

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static("public"))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

// Application Connect with Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Started on Port: ${port} ...`);
});
