var express = require("express");
var cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
    res.sendFile(process.cwd() + "/views/index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Your app is listening on port " + port);
});
