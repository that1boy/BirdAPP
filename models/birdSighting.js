const mongoose = require("mongoose");

const sightingSchema = new mongoose.Schema(
  {
    specie: {
      type: String,
      ref: "Species",
      required: [true, "Specie not found!"],
    },
    createdAt: { type: Date, default: Date.now },
    location: { type: String },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);

const Sight = mongoose.model("Sight", sightingSchema, "Sight");

module.exports = Sight;
