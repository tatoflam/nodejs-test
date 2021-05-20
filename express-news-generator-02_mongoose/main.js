"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"),
  Article = require("./models/article");

mongoose.connect(
  "mongodb://localhost:27017/news_db",
  {useNewUrlParser: true}
);

// set database connection
mongoose.set("useCreateIndex", true);
// set database connection to const variable
const db = mongoose.connection;

// On database is opened, log message only one time
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});
 
var article3 = new Article({
  title: "title3",
  author: "author3",
  distributed: "2021-05-21",
  media: "terminal:)",
  content: "test"
})

article3.save((error, savedDocument) => {
  if (error) console.log(error);
  console.log("savedDocument------");
  console.log(savedDocument);
});

Article.create(
  {
    title: "title4",
    author: "author4",
    distributed: "2021-05-21",
    meidatypo: "terminal;)",
    content: "test4"
  },
  function (error, savedDocument){
    if (error) console.log(error);
    console.log("createdDocument------");
    console.log(savedDocument);
  }
);

var myQuery = Article.findOne({
  title: "title3"
}).where("author", /author3/);

myQuery.exec((error, data) => {
  if (data) {
    console.log("findOne(title3)------");
    console.log(data);
  }
  if (error) console.log(error.stack);
});

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/news", homeController.showNews);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
