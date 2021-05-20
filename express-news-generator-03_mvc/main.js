"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  articlesController = require("./controllers/articlesController"),
  subscribersController = require("./controllers/subscribersController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"),
  Article = require("./models/article"),
  Subscriber = require("./models/subscriber");

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

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);
app.use(layouts);
app.use(express.static("public"));

app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.get("/", homeController.index);
app.get("/news", homeController.showNews);

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  res.render("subscribers", {subscribers: req.data});
})

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/contact", subscribersController.saveSubscriber);

app.get("/articles", articlesController.getAllArticles, (req, res, next) => {
  console.log(req.data);
  res.render("articles", {articles: req.data});
});

app.use(errorController.logErrors);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
