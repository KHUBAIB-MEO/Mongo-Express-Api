const mongoose = require('mongoose');

const userDataSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, required: true },
  profilePicUrl: { type: String },
});

module.exports = mongoose.model("User", userDataSchema); // Exporting the model
