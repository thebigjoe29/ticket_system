const mongoose = require("mongoose");
const ticketschema = new mongoose.Schema(
  {
    email: { type: String },
    type: { type: String },
    priority: { type: String },
    details: { type: String },
  },
  {
    collection: "ticketinfo",
  }
);
module.exports = mongoose.model("ticketinfo", ticketschema);
