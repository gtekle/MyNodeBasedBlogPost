const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const flash = require("connect-flash");
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
const expressSession = require("express-session");
const authMiddleware = require("./middlewares/authMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middlewares/redirectIfAuthenticatedMiddleware");
const logoutController = require("./controllers/logout");

global.loggedIn = null;
const dbConUrl = "mongodb://localhost:27017/my_blog_database";
const cookieSecret = "killer bees";

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
// express session middleware
app.use(
  expressSession({
    secret: cookieSecret,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});
app.use(flash());

app.get("/", homeController);
app.get("/about", aboutContorller);
app.get("/contact", contactController);
app.get("/post/:id", getPostController);
app.get("/posts/new", authMiddleware, newPostController);
app.post("/posts/store", authMiddleware, storePostController);
app.get(
  "/auth/user/register",
  redirectIfAuthenticatedMiddleware,
  newUserController
);
app.post(
  "/users/register",
  redirectIfAuthenticatedMiddleware,
  storeUserController
);
app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);
app.post(
  "/users/login",
  redirectIfAuthenticatedMiddleware,
  loginUserController
);
app.get("/auth/logout", logoutController);
app.use((req, res) => {
  res.render("notfound");
});

app.listen(5000, () => {
  console.log("App Server started on port 5000...");
});
