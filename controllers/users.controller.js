const { v4: uuidv4 } = require("uuid");
let users = require('../models/users.models');

// get Users
const getAllUser = (req, res) => {
    res.status(200).json(users);
}

// create User
const createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        userName: req.body.userName,
        email: req.body.email,
    }
    users.push(newUser);
    res.status(201).json(users);
}

//update user
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { userName, email } = req.body;

    users
        .filter((user) => user.id === userId)
        .map((selectetUser) => {
            selectetUser.userName = userName;
            selectetUser.email = email;
        })

    res.status(200).json(users)
}

//delete user
const deleteUser = (req, res) => {
    const userId = req.params.id;
    users = users.filter((user) => user.id !== userId);
    res.status(200).json(users)
}

module.exports = { getAllUser, createUser, updateUser, deleteUser };