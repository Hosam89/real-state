import mongoose from "mongoose";

const estateSchema = new mongoose.Schema({
  kind: {
    type: String,
    enum: ["hause", "flat"],
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  availableFor: {
    type: String,
    enum: ["buy", "rent", "rent for"],
  },
  imageUrl: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  furniture: { type: Boolean, default: "N/A" },
  description: { type: String, required: true },
});

const Estate = mongoose.model("estate", estateSchema);

export default Estate;
