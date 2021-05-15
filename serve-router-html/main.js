const getJsonString = obj => {
  return JSON.stringify(obj, null, 2);
}

const port = 3000, 
  http = require("http"),
  httpStatusCodes = require("http-status-codes"),
  router = require("./router"),
  fs = require("fs"), 
  plainTextContentType = {
    "Content-Type": "text/plain"
  },
  htmlContentType = {
    "Content-Type": "text/html"
  },

customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (error, data) => {
    if (error) {
      console.log("Error reading file");
    }
    res.end(data);
  });
};

// Register route by get an post
router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("INDEX");
});

router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
})

router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, htmlContentType);
  customReadFile("views/contact.html", res);
})

router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});

http.createServer(router.handle).listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

