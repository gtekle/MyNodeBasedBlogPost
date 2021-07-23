module.exports = (req, res) => {
  var username = "";
  var password = "";
  const data = req.flash("data")[0];

  if (typeof data != "undefined") {
    username = data.username;
    password = data.password;
  }
  // renders registerUser.ejs under views folder
  res.render("registerUser", {
    // errors: req.session.validationErrors,
    errors: req.flash("validationErrors"),
    username: username,
    password: password,
  });
};
