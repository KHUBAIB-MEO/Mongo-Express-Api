const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./modules/user_module'); // Adjust the path to where your 'user_module.js' file is located

const app = express();

// Use body-parser middleware to parse incoming JSON request bodies
app.use(bodyParser.json());

// MongoDB connection string
const connectionString = "mongodb+srv://khubaibnaeem42:pdXQ4VkY1UbYtHyb@cluster0.cnrtf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:", e);
  });

// Home route
app.get('/', (req, res) => {
  res.send("Khubaib Naeem");
});

// POST route for adding a new user
app.post('/addUser', async (req, res) => {
  try {
    const userData = req.body; // Get user data from request body
    const newUser = new User(userData); // Create a new User document
    await newUser.save(); // Save to MongoDB

    res.status(201).json({
      message: "User added successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding user",
      error,
    });
  }
});

// GET route to fetch all users
app.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the collection
    res.status(200).json({
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving users",
      error,
    });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
