const express = require("express");
const ticketschema = require("../schema/ticketschema");
const route = express.Router();
route.post("/create-ticket", (req, res, next) => {
  ticketschema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

route.get("/", (req, res, next) => {
  let email = req.query.email;
  ticketschema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      let filterdata = data.filter((ticket) => ticket.email === email);
      return res.json(filterdata);
    }
  });
});

module.exports = route;
