const port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

app
  .set("view engine", "ejs")
  .set("port", process.env.PORT || 3000);

app
  .use(layouts)
  .use(express.urlencoded({
    extended : false
  }))
  .use(express.json());

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
  });

app
  .get("/name", homeController.respondWithName)
  .get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
  });

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${ app.get("port")}`);
});