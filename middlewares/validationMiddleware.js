// custom middelware example code used in index.js file to add validation of form input fields
module.exports = (req, res, next) => {
  if (req.files == null || req.body.title === null) {
    // console.log("One of the required fields is empty.");
    return res.redirect("/posts/new");
  }
  next();
};
