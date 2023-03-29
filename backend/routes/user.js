import express from "express";
import User from "../model/User.js";

const router = express.Router();

router
  //get Method to get all the Users
  .get("/", async (req, res) => {
    try {
      const result = await User.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json(error);
    }
  })
  //Get Method to find on User
  .get("/:id", async (req, res) => {
    try {
      const id = req.body.id;
      const result = await User.find({ _id: id });
      res.status(200).json(result);
    } catch (error) {
      res.status(404).josn(error);
    }
  })
  //Post Method to Create a user
  .post("/signup", async (req, res) => {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    });
    try {
      const user = await User.find({ email: req.body.email });
      if (user) {
        res.status(200).json("user exist try another Email");
      } else {
        await newUser.save();
        res.status(201).json("User is successfuly created");
      }
    } catch (error) {
      if (error.name === "ValidationError") {
        res.status(400).json(error.message);
      } else {
        res.status(500).json("Internal Server Error");
      }
    }
  });

export default router;
