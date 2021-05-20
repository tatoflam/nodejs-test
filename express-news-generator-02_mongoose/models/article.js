"use strict"

// Schema for article
const mongoose = require("mongoose"), 
  articleSchema = mongoose.Schema({
    title: String,
    author: String,
    distributed: String,
    media: String,
    content: String
  });

// Apply schema for article
module.exports = mongoose.model("Article", articleSchema);