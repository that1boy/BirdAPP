const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: [true, "Name should be unique!"],
    },
    size: {
      type: String,
    },
    colour: {
      type: String,
    },
    weight: {
      type: Number,
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);

const Species = mongoose.model("Species", speciesSchema, "Species");

module.exports = Species;
