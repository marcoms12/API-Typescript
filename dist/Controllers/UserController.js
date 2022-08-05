"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
const User_1 = require("../Models/User");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello User');
});
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    const usuario = new User_1.User(name, email, password);
    usuario.save();
    res.json(usuario);
});
router.get('/:name', (req, res) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    // Greet the given name
    res.send(`Hello, ${name}`);
});
// Export the express.Router() instance
exports.UserController = router;
