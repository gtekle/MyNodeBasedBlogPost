const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const newPostController = require("./controllers/newPost");
const aboutContorller = require("./controllers/about");
const contactController = require("./controllers/contact");
const homeController = require("./controllers/home");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const validateMiddleware = require("./middlewares/validationMiddleware");

// connecting to MongoDB database
mongoose.connect("mongodb://localhost:27017/my_blog_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.set("view engine", "ejs");
app.use(fileUpload());
app.use(express.static("public"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//Form input validation custom middleware
app.use("/posts/store", validateMiddleware);

app.get("/", homeController);
app.get("/about", aboutContorller);
app.get("/contact", contactController);
app.get("/post/:id", getPostController);
app.get("/posts/new", newPostController);
app.post("/posts/store", storePostController);

app.listen(5000, () => {
  console.log("App Server started on port 5000...");
});
