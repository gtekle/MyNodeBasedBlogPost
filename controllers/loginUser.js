const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = (req, res) => {
  const { userName, password } = req.body;

  User.findOne({ userName: userName }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password),
        (error, same) => {
          if (same) {
            res.redirect("/");
          } else {
            res.redirect("/auth/login");
          }
        };
    } else {
      res.redirect("/auth/login");
    }
  });
};
