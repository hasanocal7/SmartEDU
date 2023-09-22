// Modules
const express = require('express');
require('dotenv').config();
const ejs = require('ejs')

// Express Function
const app = express();

// Template Engine (ejs)
app.set('view engine', 'ejs')

//Middleware
app.use(express.static("public"))

// Get Request
app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name: "index"
  });
});

app.get('/about', (req, res) => {
    res.status(200).render('about',{
        page_name: "about"
      });
});

app.get('/courses', (req, res) => {
    res.status(200).render('courses', {
        page_name: "courses"
      });
});

app.get('/dashboard', (req, res) => {
    res.status(200).render('dashboard', {
        page_name: "dashboard"
      });
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        page_name: "contact"
      });
});

app.get('/login', (req, res) => {
    res.status(200).render('login');
});

app.get('/register', (req, res) => {
    res.status(200).render('register');
});

app.get('/course-single', (req, res) => {
    res.status(200).render('course-single');
});


// Application Connect with Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App Started on Port: ${port} ...`);
});
