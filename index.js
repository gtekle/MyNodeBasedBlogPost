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
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");

const dbConUrl = "mongodb://localhost:27017/my_blog_database";
// connecting to MongoDB database
mongoose.connect(dbConUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
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
app.get("/auth/user/register", newUserController);
app.post("/users/register", storeUserController);
app.get("/auth/login", loginController);
app.post("/users/login", loginUserController);

app.listen(5000, () => {
  console.log("App Server started on port 5000...");
});
