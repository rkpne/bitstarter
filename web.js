var fs = require("fs");
var data = fs.readFileSync("index.html", "utf8");
console.log(data);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
