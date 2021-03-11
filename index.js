const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const dialogflow = require("./router/dialogflow");
const azure = require("./router/azure");
const bodyParser = require("body-parser");
var path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("", dialogflow);
app.use("", azure);

app.listen(3000, () => console.log("running on 3000"));
