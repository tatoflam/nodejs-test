"use strict";

const mongoose = require("mongoose"),
  Article = require("../models/article");

mongoose.connect(
  "mongodb://localhost:27017/news_db",
  { useNewUrlParser: true }
);
mongoose.connection;

var articles = [
  {
    title: "title1",
    author: "author1",
    distributed: "2021-05-19",
    media: "terminal:)",
    content: "test1 content"
  },
  {
    title: "title2",
    author: "author2",
    distributed: "2021-05-20",
    media: "web",
    content: "test2 content"
  },
  {
    title: "title3",
    author: "author3",
    distributed: "2021-05-21",
    media: "terminal;)",
    content: "test3"
  },
  {
    title: "title4",
    author: "author4",
    distributed: "2021-05-22",
    media: "terminal:)",
    content: "test4 content"
  },
  {
    title: "title5",
    author: "author5",
    distributed: "2021-05-23",
    media: "web",
    content: "test5 content"
  },
  {
    title: "title6",
    author: "author6",
    distributed: "2021-05-21",
    media: "terminal;)",
    content: "test6"
  },
];

Article.deleteMany()
  .exec()
  .then(() => {
    console.log("Subscriber data is empty!");
  });

var commands = [];

articles.forEach(a => {
  commands.push(
    Article.create({
      title: a.title,
      author: a.author,
      distributed: a.distributed,
      media: a.media,
      content: a.content
    })
  );
});

Promise.all(commands)
  .then(r => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(`ERROR: ${error}`);
  });