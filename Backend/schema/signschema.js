const mongoose = require("mongoose");

const signschema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    collection: "sign",
  }
);
module.exports = mongoose.model("sign", signschema);
