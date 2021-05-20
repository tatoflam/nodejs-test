"use strict";

const mongoose = require("mongoose"),
  Subscriber = require("../models/subscriber");

mongoose.connect(
  "mongodb://localhost:27017/news_db",
  { useNewUrlParser: true }
);
mongoose.connection;

var contacts = [
  {
    name: "test user1",
    email: "user1@hoge.com",
    zipCode: 1234567
  },
  {
    name: "test user2",
    email: "user2@hoge.com",
    zipCode: 3332222
  },
  {
    name: "test user3",
    email: "user3@hoge.com",
    zipCode: 1297013

  }
];

Subscriber.deleteMany()
  .exec()
  .then(() => {
    console.log("Subscriber data is empty!");
  });

var commands = [];

contacts.forEach(c => {
  commands.push(
    Subscriber.create({
      name: c.name,
      email: c.email
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