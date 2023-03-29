import express from "express";
import cloudinary from "../utilty/cloudinary.js";
import Estate from "../model/Estate.js";

const router = express.Router();

router
  .get("/all", async (req, res) => {
    try {
      const result = await Estate.find();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Estate.find({ _id: id });
      res.status(200).send(result);
    } catch (error) {
      res.status(404).send(error);
    }
  })
  .post("/add", async (req, res) => {
    const {
      kind,
      city,
      address,
      availableFor,
      furniture,
      imageUrl,
      description,
    } = req.body;

    try {
      const resultImage = await cloudinary.UploadStream.upload(imageUrl, {
        folder: "estates",
      });
      const newEstate = await Estate.create({
        kind,
        city,
        address,
        availableFor,
        furniture,
        imageUrl: {
          public_id: result.public_id,
          ulr: result.secure_url,
        },
        description,
      });
      res.status(201).send("Estate is successfuly Added");
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  });

export default router;
