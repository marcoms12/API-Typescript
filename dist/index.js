"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const welcome_controller_1 = require("./Controllers/welcome.controller");
const UserController_1 = require("./Controllers/UserController");
require("dotenv/config");
// Create a new express application instance
const app = express();
// support application/json type post data
app.use(bodyParser.json());
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
// Mount the WelcomeController at the /welcome route
app.use('/welcome', welcome_controller_1.WelcomeController);
app.use('/User', UserController_1.UserController);
// The port the express app will listen on
const port = process.env.PORT || 3000;
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
