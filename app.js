
var http = require("http");
var fs = require("fs");


http
  .createServer(function(req, res) {
    fs.readFile("/index.html", function (err,data) {
        if(err) throw err
        console.log(data.toString())
        res.write(data)
        res.end()
    })
 
      }).listen(9000)