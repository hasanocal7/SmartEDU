// Modules
const express = require('express');
require('dotenv').config();
const ejs = require('ejs')
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser')

const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');




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
app.use(
  session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' }),
  })
  );

//
global.userIN = null;

// Routes
app.use('*', (req, res, next) => {
userIN = req.session.userID;
next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

// Application Connect with Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Started on Port: ${port} ...`);
});
