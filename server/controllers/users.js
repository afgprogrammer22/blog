const User = require("../models/User")
const createUser = async (req, res) => {
    const createdUser = new User(req.body);
    try {
        const user = await createdUser.save();
        res.status(201).json(user)

    } catch (error) {
       res.status(500).json(error) 
    }
}

module.exports = {
    createUser
}
