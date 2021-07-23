const User = require("../models/User");
const path = require("path");

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    if (error) {
      return res.redirect("/auth/user/register");
    }
    res.redirect("/");
  });
};
