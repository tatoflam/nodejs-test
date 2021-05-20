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
