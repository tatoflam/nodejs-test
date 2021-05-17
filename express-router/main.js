const port = 3000,
  express = require("express"),
  app = express();
  homeController = require("./controller/homeController");

// parse URL encoded data by POST request
// $ curl --data "city=Tokyo&time=7:00PM" http://localhost:3000
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.post("/", (req, res) => {
  // console.log(req.body); // When urlencoded({extended: false}), cannot read req.body
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

// TODO: set route with parameter
app.get("/items/:vegetable", homeController.sendReqParam);


// parse GET method and log
// http://localhost:3000?artist=Pizzcato-five
app.get("/", (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  console.log(`request query: ${req.query.artist}`);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


/*
// TODO: set route with parameter
app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});
*/


