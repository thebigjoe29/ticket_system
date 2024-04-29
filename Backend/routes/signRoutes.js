const express = require("express");
const signinschema = require("../schema/signschema");
const route = express.Router();
// get - post - delete
route.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await signinschema.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

route.post("/createaccount", async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const check = await signinschema.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await signinschema.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

module.exports = route;
