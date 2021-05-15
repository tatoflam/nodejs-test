const { info } = require("console");

const getJsonString = obj => {
    return JSON.stringify(obj, null, 2);
}

const routeResponseMap = {
    "/info": "<h1>Info is here</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>About Us</h1>",
    "/hello": "<h1>Say hello by emailing us <a href=`info@info.net`>here</a></h1>",
    "/error": "Sorry, the page are you looking for is not here"
}

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res) => {

        // TODO: cannot update httpStatus Code by writeHead()
        if (req.url == "/error") {
            res.writeHead(httpStatus.StatusCodes.BAD_REQUEST, {
                "Content-Type": "text/html"
            });
        } else {
            res.writeHead(httpStatus.StatusCodes.ACCEPTED, {
                "Content-Type": "text/html"
            });
        }
        // Check defined routeResponseMap
        if (routeResponseMap[req.url]) {   
            res.end(routeResponseMap[req.url]);
            // setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
        } else {
            res.end("<h1>Hello, Welcome!</h1>")
        }

        console.log(`Request URL: ${getJsonString(req.url)}`);
        console.log(`Request Header: ${getJsonString(req.headers)}`);
        console.log(`Response Status Code: ${getJsonString(res.statusCode)}`);

        // TODO: cannot get response Header by bellow function
        // console.log(`Response Header: ${getJsonString(res.headers)}`);

    });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);