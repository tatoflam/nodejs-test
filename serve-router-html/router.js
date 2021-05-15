const httpStatus = require("http-status-codes"),
    htmlContentType = {
      "Content-Type": "text/html"
    },

// route definition
routes = {
  "GET":{
    "/info" : (req, res) => {
      res.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/plain"
      })
      res.end("Welcome to the info Page!")
    }
  },
  "POST":{}
};

// handle function for callback route
exports.handle = (req, res)  => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>")
    }
  } catch (ex) {
    console.log("error:" + ex);
  }
};

// get and post function for registering the route from main.js
exports.get = (url, action) => {
  routes["GET"][url] = action;
}

exports.post = (url, action) => {
  routes["GET"][url] = action;
}