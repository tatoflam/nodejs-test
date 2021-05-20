"use strict";

var news = [
  {
    title: "Nakano news 1",
    content: "Nakano has BrihgtBrown"
  },
  {
    title: "Koenji news 1",
    content: "Koenji has Jirokichi"
  },
  {
    title: "Koenji news 2",
    content: "Koenji has Inaoiza"
  },
  {
    title: "Asagaya news 1",
    content: "Asagaya has Checkerboard"
  }
];

exports.index = (req, res) => {
  res.render("index");
};

exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  res.render("index");
};

exports.showNews = (req, res) => {
  res.render("news", {
    offeredCourses: news
  });
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};
