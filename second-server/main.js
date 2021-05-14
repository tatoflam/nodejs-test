const getJsonString = obj => {
    return JSON.stringify(obj, null, 2);
}

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer();

app.on("request", (req, res) => {
    var body = [];

    // process data in callback function
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });

    // after data transmission is completed
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Content : ${body}`);
    });

    console.log(`Method: ${getJsonString(req.method)}`);
    console.log(`URL: ${getJsonString(req.url)}`);
    console.log(`Headers: ${getJsonString(req.headers)}`);

    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    let responseMessage = "<h1>Hello, Node.js!</h1>";
    res.end(responseMessage);

    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);