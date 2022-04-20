const express = require("express")
const {createUser} = require("../controllers/users")
const router = express.Router();

// Create User
router.post("/", createUser);

module.exports = router;
