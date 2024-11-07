"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
const universitiesRoutes = require('../my-frontend/src/routes.js');
var port = 3000;
var routes_js_1 = require("./routes.js");//
const session = require('express-session');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const router = express.Router();

router.route("/").get(controller);

// Set up session middleware
app.use(session({
  secret: 'your-secret-key', // Replace with a strong secret key
  resave: false,              // Don't save session if unmodified
  saveUninitialized: true,    // Save new sessions
  cookie: { secure: false }   // Set to true if using HTTPS
}));

// Example route
app.get('/', (req, res) => {
  // Initialize session data
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  res.send(`Number of views: ${req.session.views}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/api/v1/universities', universitiesRoutes);
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
    app.use(express.static('public'));
});

var universities = [
    { id: 1, name: 'Balkh University' },
    { id: 2, name: 'Herat University' },
    { id: 3, name: ' Rahnaward University' },
];


const path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
