const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello World! updated now !!!");
    res.end();
  })
  .listen(8000, "0.0.0.0");
