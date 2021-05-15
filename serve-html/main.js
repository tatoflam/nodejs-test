const { info } = require("console");

const getJsonString = obj => {
    return JSON.stringify(obj, null, 2);
}

const getViewUrl = (url) => {
  return `views${url}.html`
}

const port = 3000, 
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

http
  .createServer((req, res) => {
    let viewUrl = getViewUrl(req.url)
//    fs.readFile(routeMap[req.url], (error, data) => {
      fs.readFile(viewUrl, (error, data) => {
      if (error){
        res.writeHead(httpStatus.StatusCodes.NOT_FOUND);
        res.write("<h1>Sorry, not found</h1>");
      } else {
        res.writeHead(httpStatus.StatusCodes.OK, {
          "Content-Type": "text/html"
        });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port);
  console.log(`The server has started and is listening on port number: ${port}`);