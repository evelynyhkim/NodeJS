var http = require("http");
var datetime = require("./myfirstmodule");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url).query;
    var txt = q.year + " " + q.month;
    //res.write(req.url);
    //res.write("The date and time are currently: " + datetime.myDateTime());
    res.end(txt);
  })
  .listen(8080);
