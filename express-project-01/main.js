const port = 3000,
  express = require("express"),
  app = express();

app
  .get("/", (req, res) => {
    res.send("Hi Express!") // send response to client
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
  })

  .listen(port, () => {
    console.log(`The Express.js sever has started and is listening port:` + `${port}`);
  });