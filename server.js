var express = require("express"),
    logger = require("morgan"),
    bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));



app.listen(PORT, (err, res) => {
    if (err) {
        console.log("error getting server running");
    } else {
        console.log("Server is running on port", PORT);
    }
})
