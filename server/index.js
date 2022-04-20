const express = require("express")
const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv")
dotenv.config();

// Initialize App
const app = express();

app.use(express.json())

// Connect to DB
mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected".underline.red)).catch((error) => console.log(error))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT:", PORT)
})
