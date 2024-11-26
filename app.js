const express = require('express');
const app = express();
const mongoose = require('mongoose');
var port = 3000;
const connectionString = "mongodb+srv://khubaibnaeem42:pdXQ4VkY1UbYtHyb@cluster0.cnrtf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(connectionString).then(() => {
    console.log("Connected to MongoDB");
})
    .catch((e) => {
        console.log("Error connecting to MongoDB:", e);
    });

app.get('/', function (req, res) {
    res.send("Khubaib");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


