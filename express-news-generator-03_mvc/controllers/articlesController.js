const Article = require("../models/article");

exports.getAllArticles = (req, res) => {
  Article.find({})
    .exec()
    .then (articles => {
      res.render("articles", {
        articles: articles
      });
    })
    .catch(error => {
      console.log(error.message);
      return [];
    })
    .then(() => {
      console.log("promise complete");
    });
};