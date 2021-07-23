module.exports = (req, res) => {
  if (req.session.userId) {
    return res.render("create", {
      createPost: true,
    });
  }
  res.render("/auth/login");
};
