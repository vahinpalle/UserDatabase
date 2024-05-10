const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require('./models/Users')
const cors = require('cors')

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://vahinpalle:rE0T32Rbyy5wJdY0@cluster0.x8pyaxu.mongodb.net/mernpractice?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUsers", async (req, res) => {
    try {
        const result = await UserModel.find({}); 
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

app.post("/createUsers", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user)
});


app.listen(3001, () => {
    console.log("SERVER RUNNING");
});