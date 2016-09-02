const http = require("http");
const useragent = require("useragent");

http.createServer(function (req, res) {

    let response = {
        "ipaddress": headers["x-real-ip"],
        "language": req.headers["accept-language"].slice(0, req.headers["accept-language"].indexOf(",")),
        "software": useragent.parse(req.headers['user-agent']).os.toString()
    };

    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(response));

}).listen(8085);
