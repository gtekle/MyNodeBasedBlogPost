module.exports = (req, res) => {
  if (req.session.userId) {
    return res.render("create");
  }
  res.render("/auth/login");
};
