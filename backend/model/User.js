import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },

  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,

    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },

  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("users", userSchema);

export default User;
