var express = require("express"),
    logger = require("morgan")('dev'),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    routes = require('./routes');

var app = express();
var PORT = process.env.PORT || 3000;



app.use(express.static("public"));

mongoose.connect('mongodb://localhost/whiskeyworld');

app.use(logger, bodyParser.json(), bodyParser.urlencoded({
    extended: true
}));
routes(app);

app.listen(PORT, (err, res) => {
    if (err) {
        console.log("error getting server running");
    } else {
        console.log("Server is running on port", PORT);
    }
})
